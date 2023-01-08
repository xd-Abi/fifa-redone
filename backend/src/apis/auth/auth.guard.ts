/**
 * @packageDocumentation
 * @module Auth-Guard
 */

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger: Logger = new Logger(JwtAuthGuard.name);

  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (authHeader === undefined) {
      return false;
    }

    const token = authHeader.split(' ')[1];

    try {
      this.jwtService.verify(token, {
        secret: 'at_secret',
      });

      return true;
    } catch (err) {
      this.logger.error(err);
      return false;
    }
  }
}
