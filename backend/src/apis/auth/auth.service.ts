/**
 * @packageDocumentation
 * @module Auth-Controller
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { generateSalt, hash } from '../../utils';
import { FifaAuthProvider } from './auth.schemas';
import { JwtPayload } from './auth.types';

@Injectable()
export class FifaAuthProviderService {
  constructor(
    @InjectModel(FifaAuthProvider.name)
    private readonly model: Model<FifaAuthProvider>,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Verifies if an fifa identity with the given unique identifier (uid) exists in the database.
   * If the identity is found, it is returned; otherwise, undefined is returned.
   *
   * @param uid The unique identifier of the user
   */
  async findOne(uid: string): Promise<FifaAuthProvider | undefined> {
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
  async create(dto: FifaAuthProvider): Promise<string | undefined> {
    try {
      const result = await this.model.create(dto);

      return result.id;
    } catch (err) {
      throw new HttpException('Identity already exists', HttpStatus.CONFLICT);
    }

    return undefined;
  }

  /**
   * Creates an signed access token using the specified payload
   *
   * @param payload The payload to include in the access token
   */
  async createAccessTokens(payload: JwtPayload): Promise<string> {
    const accessToken = this.jwtService.sign(
      {
        sub: payload.sub,
      },
      {
        expiresIn: '15m',
        secret: 'at_secret',
      },
    );

    return accessToken;
  }
}
