import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfig, EnvConfigSchema, MongoConfig } from './config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './apis/auth/module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [AppConfig, MongoConfig],
      validationSchema: EnvConfigSchema,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const username = configService.get('mongo.user');
        const password = configService.get('mongo.password');
        const host = configService.get('mongo.host');
        const port = configService.get('mongo.port');
        const database = configService.get('mongo.database');

        return {
          uri: `mongodb://${username}:${password}@${host}:${port}`,
          dbName: database,
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
  ],
})
export class AppModule {}
