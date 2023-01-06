/**
 * @packageDocumentation
 * @module Auth-API
 */

import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
  constructor(private readonly authService: AuthService) {}

  @Get('sign-in')
  async getAll() {
    return await this.authService.findOne('63b87d3b5869d00461ac8d9dF');
  }

  /**
   * Sign in using email and password. Upon successful sign in, a signed
   * access token and a refresh token will be returned.
   *
   * @param body The request body, which contains a valid email and password
   */
  @Post('sign-in')
  async signIn(@Body() body: SignInInterface) {
    await this.authService.create({
      password: 'password',
      salt: 'salt',
      history: {
        loginsCount: 2,
        logins: [
          {
            ip: '127.0.0.1',
          },
        ],
      },
    });
  }

  /**
   * Sign up using username, email and password
   *
   * @param body The request body, which contains a username, valid email and password
   */
  @Post('sign-up')
  async signUp(@Body() body: SignUpInterface) {}

  /**
   * Obtain a new access token using the refresh token. If the refresh token is valid,
   * a new access token will be returned.
   *
   * @param body The request body, which contains the refresh token
   */
  @Post('refresh-token')
  async refreshAccessToken(@Body() body: RefreshAccessTokenInterface) {}
}
