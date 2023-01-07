/**
 * @packageDocumentation
 * @module User-Module
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './api';
import { User, UserSchema } from './schemas';
import { UserService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        collection: 'users',
        schema: UserSchema(),
      },
    ]),
    JwtModule.register({}),
  ],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
