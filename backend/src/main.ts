/**
 * @packageDocumentation
 * @module EntryPoint
 */

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Initializes and bootstraps the NestJS application.
 *
 * @async
 */
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(8080);
};

bootstrap();
