
/* eslint-disable no-mixed-spaces-and-tabs */

/* eslint-disable @typescript-eslint/naming-convention */

// Import All Cache Storage Functions
import Cache_Storage from './Services/bin/Cache Storage'; // Import All Cache Storage Functions

// Import All Local Storage Functions
import {clearLocalStorage, getLocalStorage, removeLocalStorage, saveLocalStorage, updateLocalStorage} from './Services/bin/Local.Storage'; // Import All Local Storage Functions

// Import All Session Storage Functions
import {clearSession, getSession, removeSession, saveSession, updateSession} from './Services/bin/Session.Storage'; // Import All Session Storage Functions

// Import IndexedDB Functions
import IndexedDB_Storage from './Services/bin/IndexedDB'; // Import IndexedDB Class

// Import API functions from API.ts
import {GetFetch, PostFetch, PutFetch, DeleteFetch} from './Services/bin/API.config'; // Import API functions from API.ts
import {RegisterAPIBaseDomain} from './Services/Class Based/Class .Based.API.Call'; // Import API functions from API.ts

// Crypto Functions
import {reActUpdateDocumentTitle} from './Services/bin/Update.Document.Title'; // Import Crypto Functions
import {ReactEncryption} from './Services/Class Based/Class.Based.Encryption.Call'; // Import Crypto Functions

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

// Export React Common Functions
export const React = {
	UpdateDocumentTitle: reActUpdateDocumentTitle,
	Fetch: {
	  Get: GetFetch,
	  Post: PostFetch,
	  Put: PutFetch,
	  Delete: DeleteFetch,
	},
	ClassBasedFunctions: {
		API: RegisterAPIBaseDomain,
		ReactEncrypt: ReactEncryption,
	},
}; // End of React
