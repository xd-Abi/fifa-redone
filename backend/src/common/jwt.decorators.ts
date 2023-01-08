import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from '../apis/auth';

export const JwtSubject = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    // Get the request object from the execution context
    const request = ctx.switchToHttp().getRequest();

    // Extract the JWT from the authorization header
    const authHeader = request.headers.authorization;
    const token = authHeader.split(' ')[1];

    // Decode the token
    const payload = jwt.decode(token) as JwtPayload;
    return payload.sub;
  },
);
