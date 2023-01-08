/**
 * @packageDocumentation
 * @module Auth-Types
 */

import {
  IsString,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator/';

import { Gender } from '../user';

export type JwtPayload = {
  sub: string;
  iat: number;
  exp: number;
};

export class EmailPasswordSignUpInterface {
  @IsString()
  @IsNotEmpty()
  @MaxLength(25)
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsDateString()
  birthdate: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class RefreshTokenInterface {
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
