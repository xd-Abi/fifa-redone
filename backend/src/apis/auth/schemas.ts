/**
 * @packageDocumentation
 * @module Auth-Schemas
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
import { ObjectId, SchemaTypes, Types } from 'mongoose';

@Schema()
export class AuthLogin {
  @Prop()
  ip: string;

  @Prop({ default: Date.now() })
  time: string;

  @Prop()
  successful: boolean;
}

@Schema()
export class AuthHistory {
  @Prop()
  loginsCount: number;

  @Prop({ _id: false, default: [] })
  logins: AuthLogin[];
}

@Schema({
  timestamps: true,
})
export class AuthIdentity {
  @Prop()
  @Exclude()
  password: string;

  @Prop()
  salt: string;

  @Prop({ _id: false })
  history: AuthHistory;
}

export const AuthIdentitySchema = SchemaFactory.createForClass(AuthIdentity);
