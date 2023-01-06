import { Module } from '@nestjs/common';
import AuthModule from './api/auth';


@Module({
  imports: [
    AuthModule
  ],
})
export class AppModule {}
