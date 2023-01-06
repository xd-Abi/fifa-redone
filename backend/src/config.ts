import * as Joi from '@hapi/joi';
import { registerAs } from '@nestjs/config';

export const EnvConfigSchema = Joi.object({
  SERVER_PORT: Joi.number().default(3000),
  MONGO_USER: Joi.string().required(),
  MONGO_PASSWORD: Joi.string().required(),
  MONGO_HOST: Joi.string().default('localhost'),
  MONGO_PORT: Joi.number().default(8081),
  MONGO_DB: Joi.string().default('fifa'),
});

export const AppConfig = registerAs('app', () => {
  const port = process.env.SERVER_PORT;

  return {
    port: port,
  };
});

export const MongoConfig = registerAs('mongo', () => {
  const user = process.env.MONGO_USER;
  const password = process.env.MONGO_PASSWORD;
  const host = process.env.MONGO_HOST;
  const port = process.env.MONGO_PORT;
  const database = process.env.MONGO_DB;

  return {
    user: user,
    password: password,
    host: host,
    port: port,
    database: database,
  };
});
