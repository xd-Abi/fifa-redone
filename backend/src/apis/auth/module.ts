/**
 * @packageDocumentation
 * @module Auth-Module
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from './api';
import { AuthIdentity, AuthIdentitySchema } from './schemas';
import { AuthService } from './services';
import * as uniqueValidator from 'mongoose-unique-validator';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: AuthIdentity.name,
        collection: 'auth',
        useFactory: () => {
          const schema = AuthIdentitySchema;
          schema.plugin(uniqueValidator);
          return schema;
        },
      },
    ]),
    JwtModule.register({
      secret: 'test',
    }),
  ],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
