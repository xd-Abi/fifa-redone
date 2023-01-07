import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfig, EnvConfigSchema, MongoConfig } from './config';
import { UserModule } from './apis/user';
import { DatabaseMongooseModule } from './utils';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [AppConfig, MongoConfig],
      validationSchema: EnvConfigSchema,
    }),
    DatabaseMongooseModule,
    UserModule,
  ],
})
export class AppModule {}
