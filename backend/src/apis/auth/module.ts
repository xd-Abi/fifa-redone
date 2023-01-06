/**
 * @packageDocumentation
 * @module Auth-Module
 */

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './api';
import { AuthIdentity, AuthIdentitySchema } from './schemas';
import { AuthService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AuthIdentity.name,
        schema: AuthIdentitySchema,
        collection: 'auth',
      },
    ]),
  ],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
