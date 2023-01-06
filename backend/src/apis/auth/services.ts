/**
 * @packageDocumentation
 * @module Auth-Module
 */

import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthIdentityDto } from './interfaces';
import { AuthIdentity } from './schemas';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthIdentity.name) private readonly model: Model<AuthIdentity>,
  ) {}

  /**
   * Verifies if a authentication identity with the given unique identifier (uid) exists in the database.
   * If the user is found, it is returned; otherwise, undefined is returned.
   *
   * @param uid The unique identifier of the user
   */
  async findOne(uid: string): Promise<AuthIdentity | undefined> {
    try {
      return await this.model.findById({ _id: uid }).exec();
    } catch (err) {
      throw new HttpException(
        'Authentication Identity not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return undefined;
  }

  /**
   * Creates a new authentication identity for a user using the provided data transfer object (dto),
   * which contains all necessary authentication information.
   *
   * @param dto The datatransfer object, containing all authentication information
   */
  async create(dto: AuthIdentityDto) {
    await this.model.create(dto);
  }
}
