/**
 * @packageDocumentation
 * @module User-API
 */

import { Controller, Get } from '@nestjs/common';
import { UserInterface } from './interfaces';

/**
 * This controller is responsible for handling all profile actions. This includes
 * creating, updating, deleting, and retrieving profile information.
 */
@Controller('me')
export class UserController {
  @Get()
  async getMe() {
    return {
      uid: '12981-2332189-42491-42',
      email: 'test@example.com',
      username: 'test',
    } as UserInterface;
  }
}
