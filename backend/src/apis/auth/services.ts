/**
 * @packageDocumentation
 * @module Auth-Services
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FifaAuthIdentityProvider } from './schemas';

@Injectable()
export class FifaAuthService {
  constructor(
    @InjectModel(FifaAuthIdentityProvider.name)
    private readonly model: Model<FifaAuthIdentityProvider>,
  ) {}

  /**
   * Verifies if an fifa identity with the given unique identifier (uid) exists in the database.
   * If the identity is found, it is returned; otherwise, undefined is returned.
   *
   * @param uid The unique identifier of the user
   */
  async findOne(uid: string): Promise<FifaAuthIdentityProvider | undefined> {
    try {
      return await this.model.findById({ uid: uid }).exec();
    } catch (err) {
      throw new HttpException('Identity not found', HttpStatus.NOT_FOUND);
    }

    return undefined;
  }

  /**
   * Creates a new fifa identity for a user using the provided data transfer object (dto),
   * which contains all necessary identity information.
   *
   * @param dto The datatransfer object, containing all identity information
   */
  async create(dto: FifaAuthIdentityProvider): Promise<string | undefined> {
    try {
      const result = await this.model.create(dto);

      return result.id;
    } catch (err) {
      throw new HttpException('Identity already exists', HttpStatus.CONFLICT);
    }

    return undefined;
  }
}
