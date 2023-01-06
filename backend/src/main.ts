import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);

  app.setGlobalPrefix('api/v1/');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(configService.get('app.port'));
}

bootstrap();
