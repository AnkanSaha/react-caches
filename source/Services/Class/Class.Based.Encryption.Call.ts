/* eslint-disable @typescript-eslint/parameter-properties */
/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable @typescript-eslint/naming-convention */

// Crypto Functions
import {
  decrypt,
  encrypt,
  decryptSync,
  encryptSync,
} from "../Function/Crypto.config"; // Import Crypto Functions

// React Encryption Class
export class ReactEncryption {
  Key: string;
  constructor(Key: string) {
    this.Key = Key;
  }

  // Encrypt Functions
  /**
   * The function "Encrypt" takes a string of data, converts it to JSON format, encrypts it using a
   * specified key, and returns the encrypted data as a string.
   * @param {string} Data - The `Data` parameter is a string that represents the data you want to
   * encrypt.
   * @returns the encrypted data as a string.
   */
  public async Encrypt(Data: string): Promise<string> {
    // Encrypt data
    const ReadyData = JSON.stringify(Data);
    const encryptedData = await encrypt(ReadyData, this.Key);
    return encryptedData;
  }

  // Decrypt Function
  /**
   * The function Decrypt takes a string of data, decrypts it using a specified key, and returns the
   * decrypted data.
   * @param {string} Data - The `Data` parameter is a string that represents the data that needs to be
   * decrypted.
   * @returns The decrypted data is being returned.
   */
  public async Decrypt(Data: string): Promise<any> {
    // Encrypt data
    const decryptedData = await decrypt(Data, this.Key);
    return decryptedData;
  }

  // Sync Functions for Encryption
  /**
   * The function takes a string of data, encrypts it using a specified key, and returns the encrypted
   * data.
   * @param {string} Data - The "Data" parameter is a string that represents the data you want to
   * encrypt.
   * @returns the encrypted data as a string.
   */
  public EncryptSync(Data: string): string {
    // Encrypt data
    const ReadyData = JSON.stringify(Data);
    const encryptedData = encryptSync(ReadyData, this.Key);
    return encryptedData;
  }

  // Decrypt Function Sync
  /**
   * The function DecryptSync takes a string of data and decrypts it using a specified key.
   * @param {string} Data - The `Data` parameter is a string that represents the data that needs to be
   * decrypted.
   * @returns The decrypted data is being returned.
   */
  public DecryptSync(Data: string): any {
    // Encrypt data
    const decryptedData = decryptSync(Data, this.Key);
    return decryptedData;
  }
}
