/**
 * @packageDocumentation
 * @module Database-Configuration-Utils
 */

import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

/**
 * This is a utility function for creating a MongoDB connection URI from separate username, password, host, and port inputs. The function takes these inputs as arguments and
 * returns a string in the format mongodb://username:password@host:port.
 *
 * @param username The username to connect to the database
 * @param password The password to connect to the database
 * @param host The host of the database
 * @param port The port of the database
 */
const parseMongoURI = (
  username: string,
  password: string,
  host: string,
  port: number,
) => {
  return `mongodb://${username}:${password}@${host}:${port}`;
};

/**
 * This is a wrapper function for configuring the MongooseModule in a NestJS application.
 * It allows to set up the MongooseModule with the desired configuration options,
 * defined in the ConfigService.
 */
export const DatabaseMongooseModule = MongooseModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const username = configService.get('mongo.user');
    const password = configService.get('mongo.password');
    const host = configService.get('mongo.host');
    const port = configService.get('mongo.port');
    const database = configService.get('mongo.database');

    return {
      uri: parseMongoURI(username, password, host, port),
      dbName: database,
    };
  },
  inject: [ConfigService],
});
