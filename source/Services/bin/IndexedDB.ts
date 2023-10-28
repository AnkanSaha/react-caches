/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable @typescript-eslint/parameter-properties */

/* eslint-disable @typescript-eslint/naming-convention */

// import Status Codes
import StatusCodes from '../../Helper/StatusCodes'; // Status Codes

// .. Global Types
type str = string;
type int = number;

// Function to save data in IndexedDB
/* The IndexedDB class is a TypeScript class that provides methods for performing CRUD operations on an
IndexedDB database. */
export default class IndexedDB {
	private readonly databaseName: str;
	private readonly dbVersion: int;
	private readonly objectStoreName: str;
	private db: IDBDatabase | null = null;

	constructor(databaseName: str, dbVersion: int, objectStoreName: str) {
		this.databaseName = databaseName;
		this.dbVersion = dbVersion;
		this.objectStoreName = objectStoreName;

		this.openDatabase();
	}

	/**
 * The function `deleteData` deletes a data entry from an IndexedDB object store.
 * @param {str} key - The key parameter is a string that represents the key of the data you want to
 * delete from the IndexedDB object store.
 * @returns The `deleteData` function returns a Promise that resolves to an object with the following
 * properties:
 */
	public async deleteData(key: str): Promise<any> {
		const objectStore = this.getObjectStore('readwrite');
		if (objectStore) {
			return new Promise((resolve, reject) => {
				const request = objectStore.delete(key);
				request.onsuccess = () => {
					resolve({
						status: true,
						Code: StatusCodes.ACCEPTED,
						message: 'Data removed successfully',
						StorageName: 'IndexedDB',
					});
				};

				request.onerror = () => {
					reject({
						status: false,
						Code: StatusCodes.INTERNAL_SERVER_ERROR,
						message: 'Error removing data: ' + request.error,
						StorageName: 'IndexedDB',
					});
				};
			});
		}
	}

	/**
 * The function creates data in an IndexedDB object store and returns a promise with a success or error
 * message.
 * @param {unknown} data - The `data` parameter is of type `unknown`, which means it can be any type of
 * data. It represents the data that you want to add to the IndexedDB object store.
 * @returns The `createData` function returns a Promise that resolves to an object with the following
 * properties:
 * - `status`: A boolean indicating the status of the operation (true for success, false for failure).
 * - `Code`: A status code indicating the result of the operation.
 * - `message`: A message describing the result of the operation.
 * - `StorageName`: The name of the storage mechanism being used
 */
	public async createData(data: unknown): Promise<any> {
		const objectStore = this.getObjectStore('readwrite');
		console.log('objectStore', objectStore);
		if (objectStore) {
			console.log('Has objectStore');
			return new Promise((resolve, reject) => {
				const request = objectStore.add(data);
				request.onsuccess = () => {
					console.log('request.onsuccess', 'added data successfully');
					resolve({
						status: true,
						Code: StatusCodes.CREATED,
						message: 'Data added successfully',
						StorageName: 'IndexedDB',
					});
				};

				request.onerror = () => {
					reject({
						status: false,
						Code: StatusCodes.INTERNAL_SERVER_ERROR,
						message: 'Error adding data: ' + request.error,
						StorageName: 'IndexedDB',
					});
				};
			});
		}
	}

	/**
 * The function `readData` reads data from an IndexedDB object store using a given key and returns a
 * promise that resolves to the data or null if the object store is not available.
 * @param {str} key - The key parameter is a string that represents the key of the data you want to
 * read from the IndexedDB object store.
 * @returns The function `readData` returns a Promise that resolves to an object with the following
 * properties: `status`, `Code`, `message`, `StorageName`, and `data`. If the object store is not
 * available, it returns `null`.
 */
	public async readData(key: str): Promise<any | null> {
		const objectStore = this.getObjectStore('readonly');
		if (objectStore) {
			return new Promise((resolve, reject) => {
				const request = objectStore.get(key);
				request.onsuccess = () => {
					resolve({
						status: true,
						Code: StatusCodes.OK,
						message: 'Data read successfully',
						StorageName: 'IndexedDB',
						data: request.result,
					});
				};

				request.onerror = () => {
					reject({
						status: false,
						Code: StatusCodes.INTERNAL_SERVER_ERROR,
						message: 'Error reading data: ' + request.error,
						StorageName: 'IndexedDB',
					});
				};
			});
		}

		return null;
	}

	/**
 * The function `updateData` updates data in an IndexedDB object store and returns a promise with a
 * success or error message.
 * @param {str} key - The key parameter is a string that represents the key of the data you want to
 * update in the IndexedDB object store. It is used to identify the specific data item that needs to be
 * updated.
 * @param {any} newData - The `newData` parameter is the updated data that you want to store in the
 * IndexedDB. It can be of any type, such as an object, array, or primitive value.
 * @returns The `updateData` function returns a Promise that resolves to an object with the following
 * properties:
 * - `status`: a boolean indicating whether the data was updated successfully or not
 * - `Code`: a status code indicating the result of the update operation
 * - `message`: a message describing the result of the update operation
 * - `StorageName`: a string indicating the name of the storage (in this
 */
	public async updateData(key: str, newData: unknown): Promise<any> {
		const objectStore = this.getObjectStore('readwrite');
		if (objectStore) {
			return new Promise((resolve, reject) => {
				const request = objectStore.put(newData, key);
				request.onsuccess = () => {
					resolve({
						status: true,
						Code: StatusCodes.ACCEPTED,
						message: 'Data updated successfully',
						StorageName: 'IndexedDB',
					});
				};

				request.onerror = () => {
					reject({
						status: false,
						Code: StatusCodes.INTERNAL_SERVER_ERROR,
						message: 'Error updating data: ' + request.error,
						StorageName: 'IndexedDB',
					});
				};
			});
		}
	}

	private openDatabase() {
		const request = indexedDB.open(this.databaseName, this.dbVersion);

		request.onsuccess = (event: Event) => {
			console.log('Database opened successfully');
			this.db = (event.target as IDBOpenDBRequest).result;
		};

		request.onerror = (event: Event) => {
			console.error('Error opening database:', (event.target as IDBOpenDBRequest).error);
		};
	}

	private getObjectStore(mode: 'readonly' | 'readwrite'): IDBObjectStore | null {
		if (!this.db) {
			console.error('Database connection not established.');
			return null;
		}

		const transaction = this.db.transaction([this.objectStoreName], mode);
		console.log('transactionEvent', transaction);
		return transaction.objectStore(this.objectStoreName);
	}
}

