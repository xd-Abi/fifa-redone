/**
 * @packageDocumentation
 * @module Auth-API
 */

import { Body, Controller, Post } from '@nestjs/common';
import { Get, Ip } from '@nestjs/common/decorators';
import { JwtService } from '@nestjs/jwt';
import { generateSalt, hashPassword } from 'src/utils';
import {
  RefreshAccessTokenInterface,
  SignInInterface,
  SignUpInterface,
} from './interfaces';
import { AuthService } from './services';

/**
 * This controller is responsible for handling authentication, generating JWT tokens
 * and generating refresh tokens.
 */
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Get('sign-in')
  async getAll() {
    return await generateSalt(10);
    // return await this.authService.findOne('63b87d3b5869d00461ac8d9dF');
  }

  /**
   * Sign in using email and password. Upon successful sign in, a signed
   * access token and a refresh token will be returned.
   *
   * @param body The request body, which contains a valid email and password
   */
  @Post('sign-in')
  async signIn(@Body() body: SignInInterface) {}

  /**
   * Sign up using username, email and password
   *
   * @param body The request body, which contains a username, valid email and password
   */
  @Post('sign-up')
  async signUp(@Ip() ip, @Body() body: SignUpInterface) {
    const salt = await generateSalt(10);
    const hashedPassword = await hashPassword(body.password, salt);
    const id = await this.authService.create({
      email: body.email,
      password: hashedPassword,
      salt: salt,
      history: {
        loginsCount: 1,
        logins: [
          {
            ip: ip,
            successful: true,
          },
        ],
      },
    });
    const token = this.jwtService.sign(
      {
        sub: id,
      },
      {
        expiresIn: '3600s',
      },
    );

    return {
      accessToken: token,
    };
  }

  /**
   * Obtain a new access token using the refresh token. If the refresh token is valid,
   * a new access token will be returned.
   *
   * @param body The request body, which contains the refresh token
   */
  @Post('refresh-token')
  async refreshAccessToken(@Body() body: RefreshAccessTokenInterface) {}
}
