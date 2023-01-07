/**
 * @packageDocumentation
 * @module User-Schemas
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import * as uniqueValidator from 'mongoose-unique-validator';
import { AuthIdentity } from '../auth';

export enum Gender {
  Male = 0,
  Female = 1,
  Other = 2,
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ unique: true, maxlength: 25 })
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ default: false })
  verified: boolean;

  @Prop({ default: null })
  picture: string;

  @Prop({ default: null })
  firstname: string;

  @Prop({ default: null })
  lastname: string;

  @Prop({ default: Gender.Other })
  gender: Gender;

  @Prop({ default: null })
  birthdate: string;

  @Prop({ default: [] })
  identities: AuthIdentity[];
}

export const UserSchema = () => {
  const schema = SchemaFactory.createForClass(User);
  schema.plugin(uniqueValidator);
  return schema;
};

export type UserDocument = mongoose.Document<unknown, any, User> &
  User & {
    _id: mongoose.Types.ObjectId;
  };
