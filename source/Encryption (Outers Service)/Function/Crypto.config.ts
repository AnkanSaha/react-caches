// Encrypt and Decrypt Imports
import CryptoJS from "crypto-js";

// Data Types
type Str = string;

/**
 * The function encrypts a given string using AES encryption algorithm and returns the encrypted data
 * as a promise.
 * @param {Str} Data - The `Data` parameter is the string that you want to encrypt. It is the data that
 * you want to keep secure and confidential.
 * @param [Key=YourKey] - The `Key` parameter is an optional parameter that represents the encryption
 * key used to encrypt the data. If no key is provided, the default value is set to 'YourKey'.
 * @returns The encrypted data is being returned.
 */
export async function encrypt(Data: Str, Key: Str): Promise<Str> {
  // Check if User Provided Key or not
  if (!Key) {
    throw new Error("You must provide a key");
  }

  // Encrypt data
  const encryptedData = CryptoJS.AES.encrypt(Data, Key).toString(); // Encrypt data
  return encryptedData; // Return encrypted data
}

/**
 * The function decrypts a given string using the AES encryption algorithm with a specified key.
 * @param {str} Data - The `Data` parameter is the encrypted data that you want to decrypt. It should
 * be a string representing the encrypted data.
 * @param [Key=YourKey] - The `Key` parameter is an optional parameter that represents the encryption
 * key used to decrypt the data. If no key is provided, the default value is set to 'YourKey'.
 * @returns The decrypted data is being returned.
 */
export async function decrypt(Data: Str, Key: Str): Promise<Str> {
  // Check if User Provided Key or not
  if (!Key) {
    throw new Error("You must provide a key");
  }

  // Decrypt data
  const bytes = CryptoJS.AES.decrypt(Data, Key);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  // Return decrypted data
  return decryptedText; // Return decrypted data
}

// Sync Functions
export function encryptSync(Data: Str, Key: Str): Str {
  // Check if User Provided Key or not
  if (!Key) {
    throw new Error("You must provide a key");
  }

  // Encrypt data
  const encryptedData = CryptoJS.AES.encrypt(Data, Key).toString(); // Encrypt data
  return encryptedData; // Return encrypted data
}

export function decryptSync(Data: Str, Key: Str): Str {
  // Check if User Provided Key or not
  if (!Key) {
    throw new Error("You must provide a key");
  }

  // Decrypt data
  const bytes = CryptoJS.AES.decrypt(Data, Key);
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  // Return decrypted data
  return decryptedText; // Return decrypted data
}
