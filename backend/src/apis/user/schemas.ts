/**
 * @packageDocumentation
 * @module User-Schemas
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class User {
  @Prop({ unique: true, default: uuidv4() })
  uid: string;

  @Prop({ unique: true, maxlength: 25 })
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  @Exclude()
  password: string;
}
