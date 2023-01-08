/**
 * @packageDocumentation
 * @module Jwt-Decorators
 */

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { extractBearerToken } from 'src/utils';
import { JwtPayload } from '../apis/auth';

/**
 * A NestJS parameter decorator that extracts the subject from the JWT in
 * an HTTP request
 *
 * @param data Not used
 * @param context The NestJS execution context containing the request object
 */
export const JwtSubject = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const token = extractBearerToken(context);
    const payload = jwt.decode(token) as JwtPayload;
    return payload.sub;
  },
);
