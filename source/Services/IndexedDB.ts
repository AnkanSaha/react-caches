/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable @typescript-eslint/parameter-properties */

/* eslint-disable @typescript-eslint/naming-convention */

// import Status Codes
import StatusCodes from '../Helper/StatusCodes'; // Status Codes

// .. Global Types
type str = string;
type int = number;

// Function to save data in IndexedDB
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

	public async createData(data: unknown): Promise<any> {
		const objectStore = this.getObjectStore('readwrite');
		if (objectStore) {
			return new Promise((resolve, reject) => {
				const request = objectStore.add(data);
				request.onsuccess = () => {
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

	public async updateData(key: str, newData: any): Promise<any> {
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
		return transaction.objectStore(this.objectStoreName);
	}
}

