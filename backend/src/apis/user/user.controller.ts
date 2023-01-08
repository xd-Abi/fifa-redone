/**
 * @packageDocumentation
 * @module User-Controller
 */

import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtSubject } from '../../common';
import { UserDocument } from './user.schemas';

/**
 * This controller is responsible for handling all profile actions. This includes
 * creating, updating, deleting, and retrieving profile information.
 */
@Controller('me')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * Gets the user profile informations for the user identified by the `uid`,
   * which is extracted from the jwt token payload.
   */
  @Get()
  async getMe(@JwtSubject() uid: string): Promise<UserDocument> {
    return await this.userService.findOne(uid);
  }
}
