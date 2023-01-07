/**
 * @packageDocumentation
 * @module Auth-Schemas
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { SchemaTypes, Types } from 'mongoose';
import { User } from '../user';

@Schema()
export class AuthIdentity {
  @Prop()
  provider: string;

  @Prop()
  connection: string;

  @Prop({ default: false })
  isSocial: boolean;
}

@Schema()
export class FifaAuthIdentityProvider {
  @Prop({ ref: User.name, type: SchemaTypes.ObjectId })
  uid: Types.ObjectId;

  @Prop()
  @Exclude()
  password: string;

  @Prop()
  salt: string;
}

export const FifaAuthIdentityProviderSchema = SchemaFactory.createForClass(
  FifaAuthIdentityProvider,
);
