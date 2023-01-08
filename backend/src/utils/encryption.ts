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
 * Hashes the provided string using bcrypt
 *
 * @param password The string to be hashed
 * @param salt A salt to use for the hashing
 */
export const hash = async (string: string, salt: string): Promise<string> => {
  return await bcrypt.hash(string, salt);
};

/**
 * Encrypts the provided password using bcrypt. Returns a Promise that
 * resolves to a tuple with the hashed password and the salt.
 *
 * @param password The password to be hashed
 */
export const encryptPassword = async (
  password: string,
): Promise<[string, string]> => {
  const salt = await generateSalt(10);
  const hashedPassword = await hash(password, salt);

  return [hashedPassword, salt];
};
