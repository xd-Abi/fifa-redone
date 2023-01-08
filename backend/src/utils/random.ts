/**
 * @packageDocumentation
 * @module Random-Utils
 */

import { generateSalt, hash } from './encryption';

/**
 * Generates a random string using a salted hash of a random number.
 */
export const generateRandomString = async () => {
  const salt = await generateSalt(10);
  return hash(String(Math.random()), salt);
};
