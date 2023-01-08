/**
 * @packageDocumentation
 * @module App-Module
 */

import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './apis/auth';
import { UserModule } from './apis/user';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get('MONGO_URI'),
          dbName: configService.get('MONGO_DB'),
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
