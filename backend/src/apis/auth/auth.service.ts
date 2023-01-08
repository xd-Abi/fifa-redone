/**
 * @packageDocumentation
 * @module Auth-Controller
 */

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  FifaAuthProvider,
  FifaAuthProviderDocument,
  RefreshToken,
} from './auth.schemas';
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
  async findOne(uid: string): Promise<FifaAuthProviderDocument | undefined> {
    try {
      return await this.model.findById({ uid: uid }).exec();
    } catch (err) {
      throw new HttpException('Identity not found', HttpStatus.NOT_FOUND);
    }

    return undefined;
  }

  /**
   * Verifies if a refresh token exists in the database.
   * If the token is found, the auth identity is returned; otherwise, undefined is returned.
   *
   * @param uid The unique identifier of the user
   */
  async findOneByRefreshToken(
    refreshToken: string,
  ): Promise<FifaAuthProviderDocument | undefined> {
    try {
      return await this.model
        .findOne({ 'refreshToken.token': refreshToken })
        .exec();
    } catch (err) {
      throw new HttpException('Refresh token not found', HttpStatus.NOT_FOUND);
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

  /**
   * Updates the old refresh token with a new token
   *
   * @param oldRefreshToken The old refresh token as string
   * @param newRefreshToken The new refresh token with the expire date
   */
  async updateRefreshToken(
    oldRefreshToken: string,
    newRefreshToken: RefreshToken,
  ): Promise<void> {
    const identity = await this.findOneByRefreshToken(oldRefreshToken);
    identity.refreshToken = newRefreshToken;
    identity.save();
  }
}