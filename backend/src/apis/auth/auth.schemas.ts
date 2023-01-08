/**
 * @packageDocumentation
 * @module Auth-Schemas
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { SchemaTypes } from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { MongooseDocument } from 'src/common';
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
export class RefreshToken {
  @Prop()
  token: string;

  @Prop()
  expires: string;
}

@Schema()
export class FifaAuthProvider {
  @Prop({ ref: User.name, type: SchemaTypes.ObjectId, unique: true })
  uid: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop()
  salt: string;

  @Prop({ _id: false })
  refreshToken: RefreshToken;
}

export const FifaAuthProviderSchema = () => {
  const schema = SchemaFactory.createForClass(FifaAuthProvider);
  schema.plugin(uniqueValidator);
  return schema;
};

export type FifaAuthProviderDocument = MongooseDocument<FifaAuthProvider>;
