/* eslint-disable @typescript-eslint/naming-convention */
// Import All Cache Storage Functions
import {GetCache, saveCache, DeleteCache} from './Services/Cache Storage'; // Import All Cache Storage Functions

// Export Cache Storage Functions
export const CacheStorage = {
	receiveCache: GetCache,
	saveCacheData: saveCache,
	deleteCache: DeleteCache,
};
