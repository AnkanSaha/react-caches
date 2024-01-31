/* eslint-disable @typescript-eslint/naming-convention */

// Import Status Codes
import StatusCodes from '../../Helper/StatusCodes'; // Import Status Codes

// Global types
type str = string;

// Types
type Cache = undefined | Response;

// Class Based Cache Storage Service
/* The CacheStorage class provides methods for saving, retrieving, updating, deleting, and clearing
cache data. */
export default class CacheStorage {
	private readonly DatabaseName;

	/**
   * The constructor function initializes a new instance of a class with a specified database name.
   * @param {str} DatabaseName - The DatabaseName parameter is a string that represents the name of the
   * database.
   */
	constructor(DatabaseName: str) {
		this.DatabaseName = DatabaseName;
	}

	/**
   * The function `saveCache` saves data to a cache storage using the provided search key and main data.
   * @param {str} Searchkey - The `Searchkey` parameter is a string that represents the key or identifier
   * for the data being saved in the cache. It is used to retrieve the data from the cache later on.
   * @param {unknown} MainData - MainData is the data that you want to save in the cache. It can be of
   * any type, as it is defined as "unknown" in the function signature.
   * @returns an object with the following properties:
   * - status: a boolean indicating whether the cache was saved successfully or not.
   * - Code: a status code indicating the result of the cache saving operation.
   * - message: a message describing the result of the cache saving operation.
   * - StorageName: the name of the storage where the cache is saved (in this case, 'Cache Storage').
   */
	public async saveCache(Searchkey: str, MainData: unknown) {
		try {
			const cacheDB = await caches.open(this.DatabaseName);
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

	/**
   * The function `GetCache` retrieves data from a cache storage and returns a response object indicating
   * the status and result of the operation.
   * @param {str} Searchkey - The `Searchkey` parameter is a string that represents the key used to
   * search for a specific cache in the cache storage.
   * @returns an object with the following properties:
   * - status: a boolean indicating whether the cache was retrieved successfully or not.
   * - Code: a status code indicating the result of the cache retrieval operation.
   * - message: a message describing the result of the cache retrieval operation.
   * - data: the data retrieved from the cache storage.
   * - StorageName: the name of the storage where the cache is saved (in this case, 'Cache Storage').
   */
	public async GetCache(Searchkey: str) {
		try {
			const CacheDB = await caches.open(this.DatabaseName);
			const CacheData: Cache = await CacheDB.match(Searchkey);
			const CacheDataJSON: unknown = await CacheData?.json();
			if (CacheDataJSON === undefined) {
				return {
					status: false,
					Code: StatusCodes.NOT_FOUND,
					message: 'Cache Not Found',
					StorageName: 'Cache Storage',
				};
			}

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
	}

	/**
   * The function `DeleteCache` deletes a cache entry with the specified search key and returns a success
   * message if the deletion is successful, otherwise it returns an error message.
   * @param {str} Searchkey - The `Searchkey` parameter is a string that represents the key of the cache
   * entry that you want to delete from the cache storage.
   * @returns an object with the following properties:
   * - status: a boolean indicating whether the cache was deleted successfully or not
   * - Code: a status code indicating the result of the operation
   * - message: a message describing the result of the operation
   * - StorageName: the name of the cache storage being used
   */
	public async DeleteCache(Searchkey: str) {
		try {
			const CacheDB = await caches.open(this.DatabaseName);
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
	}

	/**
   * The function "updateCache" asynchronously saves the main data to the cache using the provided search
   * key.
   * @param {str} Searchkey - The `Searchkey` parameter is a string that represents the key used to
   * identify the data in the cache. It is used to retrieve or update the data associated with that key
   * in the cache.
   * @param {unknown} MainData - The MainData parameter is of type unknown, which means it can be any
   * type of data.
   * @returns the result of the `saveCache` function.
   */
	public async updateCache(Searchkey: str, MainData: unknown) {
		return this.saveCache(Searchkey, MainData);
	}

	/**
   * The function clears the cache by deleting all keys in the cache storage.
   * @returns an object with the following properties:
   */
	public async clearCache() {
		try {
			const CacheDB = await caches.open(this.DatabaseName);
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
	}
}
