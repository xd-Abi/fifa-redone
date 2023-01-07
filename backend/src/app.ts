import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfig, EnvConfigSchema, MongoConfig } from './config';
import { DatabaseMongooseModule } from './utils';
import { UserModule } from './apis/user';
import { AuthModule } from './apis/auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [AppConfig, MongoConfig],
      validationSchema: EnvConfigSchema,
    }),
    DatabaseMongooseModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
