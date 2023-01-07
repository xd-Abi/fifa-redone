/**
 * @packageDocumentation
 * @module Auth-Module
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user';
import { AuthController } from './api';
import {
  FifaAuthIdentityProvider,
  FifaAuthIdentityProviderSchema,
} from './schemas';
import { FifaAuthService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FifaAuthIdentityProvider.name,
        collection: 'auth',
        schema: FifaAuthIdentityProviderSchema(),
      },
    ]),
    JwtModule.register({
      secret: `90x5d32lkjfds02fhzsre2`,
    }),
    UserModule,
  ],
  providers: [FifaAuthService],
  controllers: [AuthController],
})
export class AuthModule {}
