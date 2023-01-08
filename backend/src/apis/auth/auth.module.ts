/**
 * @packageDocumentation
 * @module Auth-Module
 */

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user';
import { AuthController } from './auth.controller';
import { FifaAuthProvider, FifaAuthProviderSchema } from './auth.schemas';
import { FifaAuthProviderService } from './auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FifaAuthProvider.name,
        collection: 'auth',
        schema: FifaAuthProviderSchema(),
      },
    ]),
    JwtModule.register({}),
    UserModule,
  ],
  providers: [FifaAuthProviderService],
  controllers: [AuthController],
})
export class AuthModule {}
