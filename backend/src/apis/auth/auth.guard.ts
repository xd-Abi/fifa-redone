/**
 * @packageDocumentation
 * @module Auth-Guard
 */

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { JwtService } from '@nestjs/jwt';
import { extractBearerToken } from 'src/utils';

/**
 * A NestJS guard that validates JSON Web Tokens (JWTs).
 */
@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger: Logger = new Logger(JwtAuthGuard.name);

  constructor(private readonly jwtService: JwtService) {}

  /**
   * Validates the bearer token from an HTTP request.
   *
   * @param context The NestJS execution context containing the request object
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const token = extractBearerToken(context);

      this.jwtService.verify(token, {
        secret: 'at_secret',
      });

      return true;
    } catch (err) {
      this.logger.error(err);
    }

    return false;
  }
}
