/**
 * @packageDocumentation
 * @module Auth-Schemas
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { SchemaTypes } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
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
  @Prop({ ref: User.name, type: SchemaTypes.ObjectId, unique: true })
  uid: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop()
  salt: string;
}

export const FifaAuthIdentityProviderSchema = () => {
  const schema = SchemaFactory.createForClass(FifaAuthIdentityProvider);
  schema.plugin(uniqueValidator);
  return schema;
};
