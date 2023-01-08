/**
 * @packageDocumentation
 * @module Auth-Controller
 */

import { Body, Controller, Get, Post } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { encryptPassword, generateRandomString } from '../../utils';
import { User, UserService } from '../user';
import { AuthIdentity, FifaAuthProvider, RefreshToken } from './auth.schemas';
import { FifaAuthProviderService } from './auth.service';
import {
  EmailPasswordSignUpInterface,
  JwtPayload,
  RefreshTokenInterface,
} from './auth.types';

/**
 * This controller is responsible for handling all authentication actions.
 * This includes the creation of new users.
 */
@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly fifaAuthProviderService: FifaAuthProviderService,
  ) {}

  /**
   * Register a user using email and password (Fifa Authorization),
   * which returns a access and a refresh token.
   */
  @Post('sign-up')
  async signUp(@Body() body: EmailPasswordSignUpInterface) {
    const identity = {
      provider: 'Fifa',
      connection: 'Email-Passowrd-Connection',
      isSocial: false,
    } as AuthIdentity;

    const user = {
      ...body,
      verified: false,
      picture: null,
      identities: [identity],
    } as User;

    const uid = await this.userService.create(user);
    const [hashedPassword, salt] = await encryptPassword(body.password);
    const refreshToken = await generateRandomString();

    const fifaAuthProvider = {
      uid: uid,
      password: hashedPassword,
      salt: salt,
      refreshToken: {
        token: refreshToken,
        expires: new Date(Date.now() + 7 * 86400 * 1000).toISOString(),
      },
    } as FifaAuthProvider;

    this.fifaAuthProviderService.create(fifaAuthProvider);
    const accessToken = await this.fifaAuthProviderService.createAccessTokens({
      sub: uid,
    } as JwtPayload);

    return {
      accessToken,
      refreshToken,
    };
  }

  /**
   * Refresh a user's access token. Returns a new signed access and a refresh token
   */
  @Get('refresh-token')
  async refreshTokens(@Body() body: RefreshTokenInterface) {
    try {
      const identity = await this.fifaAuthProviderService.findOneByRefreshToken(
        body.refreshToken,
      );
      const accessToken = await this.fifaAuthProviderService.createAccessTokens(
        {
          sub: identity.uid,
        } as JwtPayload,
      );
      const refreshToken = await generateRandomString();
      await this.fifaAuthProviderService.updateRefreshToken(body.refreshToken, {
        token: refreshToken,
        expires: new Date(Date.now() + 7 * 86400 * 1000).toISOString(),
      } as RefreshToken);

      return {
        accessToken,
        refreshToken,
      };
    } catch (e) {
      throw new HttpException('Invalid refresh token', HttpStatus.FORBIDDEN);
    }
  }
}
