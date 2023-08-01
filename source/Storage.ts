/* eslint-disable @typescript-eslint/naming-convention */

// Import All Cache Storage Functions
import {GetCache, saveCache, DeleteCache, clearCache, updateCache} from './Services/Cache Storage'; // Import All Cache Storage Functions

// Import All Local Storage Functions
import {clearLocalStorage, getLocalStorage, removeLocalStorage, saveLocalStorage, updateLocalStorage} from './Services/Local Storage'; // Import All Local Storage Functions

// Export Cache Storage Functions
export const CacheStorage = {
	receiveCache: GetCache,
	saveCacheData: saveCache,
	deleteCache: DeleteCache,
	clearCacheData: clearCache,
	updateCacheData: updateCache,
};

// Export Local Storage Functions
export const LocalStorage = {
	saveLocalStorageData: saveLocalStorage,
	getLocalStorageData: getLocalStorage,
	removeLocalStorageData: removeLocalStorage,
	clearLocalStorageData: clearLocalStorage,
	updateLocalStorageData: updateLocalStorage,
};
