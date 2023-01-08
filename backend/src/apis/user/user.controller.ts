/**
 * @packageDocumentation
 * @module User-Controller
 */

import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtSubject } from '../../common';
import { UserDocument } from './user.schemas';
import { JwtAuthGuard } from '../auth';

/**
 * This controller is responsible for handling all profile actions. This includes
 * creating, updating, deleting, and retrieving profile information.
 */
@Controller('me')
@UseGuards(JwtAuthGuard)
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
