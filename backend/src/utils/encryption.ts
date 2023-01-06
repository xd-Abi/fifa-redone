/**
 * @packageDocumentation
 * @module Encryption-Utils
 */

import * as bcrypt from 'bcrypt';

/**
 * Generates a salt for password hashing
 *
 * @param saltRounds The number of rounds to use when generating the salt
 */
export const generateSalt = async (saltRounds: number): Promise<string> => {
  return await bcrypt.genSalt(saltRounds);
};

/**
 * Hashes the provided password using bcrypt
 *
 * @param password The password to be hashed
 */
export const hashPassword = async (
  password: string,
  salt: string,
): Promise<string> => {
  return await bcrypt.hash(password, salt);
};
