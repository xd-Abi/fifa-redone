/**
 * @packageDocumentation
 * @module Request-Utils
 */

import { ExecutionContext } from '@nestjs/common';

/**
 * Extracts the bearer token from an HTTP request and returns it
 *
 * @param context The NestJS execution context containing the request object
 * @throws An error if the authorization header is not present in the request
 */
export const extractBearerToken = (context: ExecutionContext): string => {
  const request = context.switchToHttp().getRequest();
  const authorizationHeader = request.headers.authorization;

  if (!authorizationHeader) {
    throw new Error(`No authorization header`);
  }
  const token = authorizationHeader.split(' ')[1];
  return token;
};
