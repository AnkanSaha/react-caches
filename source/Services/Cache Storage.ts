
/* eslint-disable @typescript-eslint/naming-convention */

// Import Status Codes
import StatusCodes from '../Helper/StatusCodes'; // Import Status Codes

// Global types
type str = string;

/**
 * The function saves data to a cache database using the specified database name, search key, and main
 * data.
 * @param {str} DatabaseName - The `DatabaseName` parameter is a string that represents the name of the
 * cache database where the data will be stored. This is typically a unique identifier for the cache
 * database.
 * @param {str} Searchkey - The `Searchkey` parameter is a string that represents the key under which
 * the `MainData` will be stored in the cache. It is used to retrieve the data from the cache later on.
 * @param {unknown} MainData - MainData is the data that you want to save in the cache. It can be of
 * any type, as it is defined as "unknown" in the function signature.
 * @returns an object with two properties: "status" and "message". The "status" property indicates
 * whether the cache was saved successfully (true) or not (false). The "message" property provides a
 * message indicating the result of the cache saving operation.
 */
export async function saveCache(DatabaseName: str, Searchkey: str, MainData: unknown) {
	try {
		const cacheDB = await caches.open(DatabaseName);
		await cacheDB.put(Searchkey, new Response(JSON.stringify(MainData)));
		return {
			status: true,
			Code: StatusCodes.CREATED,
			message: 'Cache Saved Successfully',
			StorageName: 'Cache Storage',
		};
	} catch {
		return {
			status: false,
			Code: StatusCodes.INTERNAL_SERVER_ERROR,
			message: 'Unable to save cache',
			StorageName: 'Cache Storage',
		};
	}
}

// Types
type Cache = undefined | Response;

/**
 * The function `GetCache` retrieves data from a cache database using a search key and returns the data
 * as a JSON object.
 * @param {str} Database - The "Database" parameter is a string that represents the name of the cache
 * database that you want to access. It is used to identify the specific cache database that you want
 * to retrieve data from.
 * @param {str} Searchkey - The `Searchkey` parameter is a string that represents the key used to
 * search for a specific cache entry in the `Database` cache.
 * @returns an object with the following properties:
 * - status: a boolean value indicating whether the cache retrieval was successful or not
 * - message: a string message indicating the status of the cache retrieval
 * - data: the retrieved cache data, represented as a JSON object
 */
export const GetCache = async (Database: str, Searchkey: str) => {
	try {
		const CacheDB = await caches.open(Database);
		const CacheData: Cache = await CacheDB.match(Searchkey);
		const CacheDataJSON: unknown = await CacheData?.json();
		return {
			status: true,
			Code: StatusCodes.OK,
			message: 'Cache Retrieved Successfully',
			data: CacheDataJSON,
			StorageName: 'Cache Storage',
		};
	} catch {
		return {
			status: false,
			Code: StatusCodes.INTERNAL_SERVER_ERROR,
			message: 'Unable to get cache',
			StorageName: 'Cache Storage',
		};
	}
};

/**
 * The function `DeleteCache` is an asynchronous function that deletes a cache entry from a specified
 * database and returns a status and message indicating the success or failure of the operation.
 * @param {str} Database - The "Database" parameter is a string that represents the name or identifier
 * of the cache database. It is used to open the cache database using the `caches.open()` method.
 * @param {str} Searchkey - The `Searchkey` parameter is the key or identifier of the cache entry that
 * you want to delete from the specified `Database`.
 * @returns an object with two properties: "status" and "message". The "status" property indicates
 * whether the cache deletion was successful or not, and the "message" property provides a
 * corresponding message.
 */
export const DeleteCache = async (Database: str, Searchkey: str) => {
	try {
		const CacheDB = await caches.open(Database);
		await CacheDB.delete(Searchkey);
		return {
			status: true,
			Code: StatusCodes.ACCEPTED,
			message: 'Cache Deleted Successfully',
			StorageName: 'Cache Storage',
		};
	} catch {
		return {
			status: false,
			Code: StatusCodes.INTERNAL_SERVER_ERROR,
			message: 'Unable to delete cache',
			StorageName: 'Cache Storage',
		};
	}
};

/**
 * The function updates the cache in a database with the provided search key and main data.
 * @param {str} Database - The `Database` parameter is a string that represents the name or identifier
 * of the database where the cache will be stored.
 * @param {str} Searchkey - The `Searchkey` parameter is a string that represents the key used to
 * search for data in the cache. It is used to identify the specific data that needs to be updated in
 * the cache.
 * @param {unknown} MainData - The MainData parameter is of type unknown, which means it can be any
 * type of data. It is the data that you want to save in the cache.
 * @returns the result of the `saveCache` function.
 */
export async function updateCache(Database: str, Searchkey: str, MainData: unknown) {
	return saveCache(Database, Searchkey, MainData);
}

/**
 * The function `clearCache` clears the cache storage by deleting all keys in the specified database.
 * @param {str} Database - The `Database` parameter is a string that represents the name of the cache
 * storage that you want to clear.
 * @returns The function `clearCache` returns an object with the following properties:
 */
export const clearCache = async (Database: str) => {
	try {
		const CacheDB = await caches.open(Database);
		const keys = await CacheDB.keys();
		keys.forEach(key => {
			void CacheDB.delete(key);
		});
		return {
			status: true,
			Code: StatusCodes.ACCEPTED,
			message: 'Cache Cleared Successfully',
			StorageName: 'Cache Storage',
		};
	} catch {
		return {
			status: false,
			Code: StatusCodes.INTERNAL_SERVER_ERROR,
			message: 'Unable to clear cache',
			StorageName: 'Cache Storage',
		};
	}
};
