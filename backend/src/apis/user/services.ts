/**
 * @packageDocumentation
 * @module User-Services
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthIdentity } from '../auth';
import { User, UserDocument } from './schemas';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly model: Model<User>) {}

  /**
   * Verifies if an user with the given unique identifier (uid) exists in the database.
   * If the user is found, it is returned; otherwise, undefined is returned.
   *
   * @param uid The unique identifier of the user
   */
  async findOne(uid: string): Promise<UserDocument | undefined> {
    try {
      return await this.model.findById({ _id: uid }).exec();
    } catch (err) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return undefined;
  }

  /**
   * Verifies if an user with the given email exists in the database.
   * If the user is found, it is returned; otherwise, undefined is returned.
   *
   * @param email The email of the user
   */
  async findOneByEmail(email: string): Promise<UserDocument | undefined> {
    try {
      return await this.model.findById({ email: email }).exec();
    } catch (err) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return undefined;
  }

  /**
   * Creates a new user using the provided data transfer object (dto),
   * which contains all necessary user information.
   *
   * @param dto The datatransfer object, containing all user information
   */
  async create(dto: User): Promise<string | undefined> {
    try {
      const result = await this.model.create(dto);

      return result.id;
    } catch (err) {
      if (err.errors.email !== undefined) {
        throw new HttpException('Email already exists', HttpStatus.CONFLICT);
      }
      if (err.errors.username !== undefined) {
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
      }
    }

    return undefined;
  }

  /**
   * Adds an identity to a user with the specified user id (uid).
   * If the identity already exists for the user, a conflict error is thrown.
   *
   * @param uid The unique identifier for the user
   * @param dto The data transfer object containg the identity information
   */
  async addIdentity(uid: string, dto: AuthIdentity): Promise<void> {
    const result = await this.findOne(uid);

    if (result.identities.includes(dto)) {
      throw new HttpException('Identity already exists', HttpStatus.CONFLICT);
    }

    result.identities.push(dto);
    await result.save();
  }
}
