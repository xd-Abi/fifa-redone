/**
 * @packageDocumentation
 * @module Auth-Interfaces
 */

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignUpInterface {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class SignInInterface {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class RefreshAccessTokenInterface {
  @IsString()
  @IsNotEmpty()
  refresh_token: string;
}

export interface AuthLoginDto {
  ip: string;
  successful?: boolean;
}

export interface AuthHistoryDto {
  loginsCount: number;
  logins: AuthLoginDto[];
}

export interface AuthIdentityDto {
  email: string;
  password: string;
  salt: string;
  history: AuthHistoryDto;
}
