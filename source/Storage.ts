/* eslint-disable @typescript-eslint/naming-convention */

// Import All Cache Storage Functions
import {GetCache, saveCache, DeleteCache, clearCache, updateCache} from './Services/Cache Storage'; // Import All Cache Storage Functions

// Import All Local Storage Functions
import {clearLocalStorage, getLocalStorage, removeLocalStorage, saveLocalStorage, updateLocalStorage} from './Services/Local Storage'; // Import All Local Storage Functions

// Import All Session Storage Functions
import {clearSession, getSession, removeSession, saveSession, updateSession} from './Services/Session Storage'; // Import All Session Storage Functions

// Export Cache Storage Functions
/* The code is exporting an object named `CacheStorage` which contains several functions related to
cache storage. Each function is assigned a corresponding function from the `./Services/Cache
Storage` module. Max Storage Size is 50MB. */

export const CacheStorage = {
	receiveCache: GetCache,
	saveCacheData: saveCache,
	deleteCache: DeleteCache,
	clearCacheData: clearCache,
	updateCacheData: updateCache,
};

// Export Local Storage Functions
/* The code is exporting an object named `LocalStorage` which contains several functions related to
local storage. Each function is assigned a corresponding function from the `./Services/Local
Storage` module. This allows other parts of the code to access and use these functions by importing
the `LocalStorage` object. Max Storage Size is 50MB. */

export const LocalStorage = {
	saveLocalStorageData: saveLocalStorage,
	getLocalStorageData: getLocalStorage,
	removeLocalStorageData: removeLocalStorage,
	clearLocalStorageData: clearLocalStorage,
	updateLocalStorageData: updateLocalStorage,
};

// Export Session Storage Functions
/* The code is exporting an object named `SessionStorage` which contains several functions related to
session storage. Each function is assigned a corresponding function from the `./Services/Session
Storage` module. This allows other parts of the code to access and use these functions by importing
the `SessionStorage` object. */
export const SessionStorage = {
	saveSessionData: saveSession,
	getSessionData: getSession,
	removeSessionData: removeSession,
	clearSessionData: clearSession,
	updateSessionData: updateSession,
};
