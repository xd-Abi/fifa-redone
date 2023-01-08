/**
 * @packageDocumentation
 * @module Mongoose-Types-Extension
 */

import mongoose from 'mongoose';

export type MongooseDocument<T> = mongoose.Document<unknown, any, T> &
  T & {
    _id: mongoose.Types.ObjectId;
  };
