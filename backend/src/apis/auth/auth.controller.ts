/**
 * @packageDocumentation
 * @module Auth-Controller
 */

import { Body, Controller, Post } from '@nestjs/common';
import { encryptPassword, generateRandomString } from '../../utils';
import { User, UserService } from '../user';
import { AuthIdentity, FifaAuthProvider, RefreshToken } from './auth.schemas';
import { FifaAuthProviderService } from './auth.service';
import { EmailPasswordSignUpInterface, JwtPayload } from './auth.types';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly fifaAuthProviderService: FifaAuthProviderService,
  ) {}

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
}
