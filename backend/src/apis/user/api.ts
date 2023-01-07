/**
 * @packageDocumentation
 * @module User-API
 */

import { Controller, Get, Headers } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './services';

/**
 * This controller is responsible for handling all profile actions. This includes
 * creating, updating, deleting, and retrieving profile information.
 */
@Controller('me')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  async getMe(@Headers() headers: any) {
    const authHeader = headers['authorization'];

    // Extract the JWT from the authorization header
    const token = authHeader.split(' ')[1];
    const payload = this.jwtService.decode(token) as object;
    const uid = payload['sub'];

    return await this.userService.findOne(uid);
  }
}
