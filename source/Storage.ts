
/* eslint-disable @typescript-eslint/parameter-properties */
/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable @typescript-eslint/naming-convention */

// Import All Cache Storage Functions
import Cache_Storage from './Services/Cache Storage'; // Import All Cache Storage Functions

// Import All Local Storage Functions
import {clearLocalStorage, getLocalStorage, removeLocalStorage, saveLocalStorage, updateLocalStorage} from './Services/Local Storage'; // Import All Local Storage Functions

// Import All Session Storage Functions
import {clearSession, getSession, removeSession, saveSession, updateSession} from './Services/Session Storage'; // Import All Session Storage Functions

// Import IndexedDB Functions
import IndexedDB_Storage from './Services/IndexedDB'; // Import IndexedDB Class

// Import API functions from API.ts
import {GetFetch, PostFetch, PutFetch, DeleteFetch} from './Services/API.config'; // Import API functions from API.ts

// Crypto Functions
import {reActUpdateDocumentTitle, decrypt, encrypt} from './Services/Crypto.config'; // Import Crypto Functions

/* The code is exporting two variables, `CacheStorage` and `IndexedDB`, which are assigned to the
classes `Cache_Storage` and `IndexedDB_Storage` respectively. This allows other modules or files to
import and use these classes for cache storage and IndexedDB operations. */

export const CacheStorage = Cache_Storage; // Export Cache Storage Class

export const IndexedDB = IndexedDB_Storage; // Export IndexedDB Class

/* The code is exporting an object named `LocalStorage` with multiple properties. Each property
represents a function from the `Local Storage` module. These functions are used to interact with the
browser's local storage. */
export const LocalStorage = {
	saveLocalStorageData: saveLocalStorage,
	getLocalStorageData: getLocalStorage,
	removeLocalStorageData: removeLocalStorage,
	clearLocalStorageData: clearLocalStorage,
	updateLocalStorageData: updateLocalStorage,
};

/* The code is exporting an object named `SessionStorage` with multiple properties. Each property
represents a function from the `Session Storage` module. */
export const SessionStorage = {
	saveSessionData: saveSession,
	getSessionData: getSession,
	removeSessionData: removeSession,
	clearSessionData: clearSession,
	updateSessionData: updateSession,
};

// React Encryption Class
class ReactEncryption {
	Key: string;
	constructor(Key: string) {
	  this.Key = Key;
	}

	public async Encrypt(Data: string): Promise<string> {
	  // Encrypt data
	  const ReadyData = JSON.stringify(Data);
	  const encryptedData = await encrypt(ReadyData, this.Key);
	  return encryptedData;
	}

	public async Decrypt(Data: string): Promise<any> {
	  // Encrypt data
	  const decryptedData = await decrypt(Data, this.Key);
	  return decryptedData;
	}
}

// Export React Common Functions
export const React = {
	UpdateDocumentTitle: reActUpdateDocumentTitle,
	ReactEncrypt: ReactEncryption,
	Fetch: {
	  Get: GetFetch,
	  Post: PostFetch,
	  Put: PutFetch,
	  Delete: DeleteFetch,
	},
}; // End of React
