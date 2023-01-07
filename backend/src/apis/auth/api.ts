/**
 * @packageDocumentation
 * @module Auth-API
 */

import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { generateSalt, hashPassword } from 'src/utils';
import { UserService } from '../user';
import { EmailPasswordSignUpInterface, JwtPayload } from './interfaces';
import { FifaAuthService } from './services';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly fifaAuthService: FifaAuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('sign-up')
  async signUp(@Body() body: EmailPasswordSignUpInterface) {
    const uid = await this.userService.create({
      username: body.username,
      email: body.email,
      verified: false,
      picture: null,
      firstname: body.firstname,
      lastname: body.lastname,
      birthdate: body.birthdate,
      gender: body.gender,
      identities: [],
    });

    const salt = await generateSalt(10);
    const hashedPassword = await hashPassword(body.password, salt);

    this.fifaAuthService.create({
      uid: uid,
      password: hashedPassword,
      salt: salt,
    });

    this.userService.addIdentity(uid, {
      provider: 'Fifa',
      connection: 'Email-Password-Connection',
      isSocial: false,
    });

    const accessToken = this.jwtService.sign(
      {
        sub: uid,
      } as JwtPayload,
      {
        expiresIn: '3600s',
      },
    );

    return {
      accessToken,
    };
  }
}
