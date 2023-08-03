/* eslint-disable @typescript-eslint/naming-convention */

// Import All Cache Storage Functions
import Cache_Storage from './Services/Cache Storage'; // Import All Cache Storage Functions

// Import All Local Storage Functions
import {clearLocalStorage, getLocalStorage, removeLocalStorage, saveLocalStorage, updateLocalStorage} from './Services/Local Storage'; // Import All Local Storage Functions

// Import All Session Storage Functions
import {clearSession, getSession, removeSession, saveSession, updateSession} from './Services/Session Storage'; // Import All Session Storage Functions

// Import IndexedDB Functions
import IndexedDB_Storage from './Services/IndexedDB'; // Import IndexedDB Class

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
