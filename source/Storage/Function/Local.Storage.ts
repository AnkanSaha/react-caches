/* eslint-disable @typescript-eslint/naming-convention */
// global Types
type str = string;
type int = number;

// Import Status Codes
import StatusCodes from '../../Status Codes/StatusCodes';

/**
 * The function saves data to the local storage using a specified key name.
 * @param {str} KeyName - The KeyName parameter is a string that represents the key under which the
 * data will be stored in the local storage.
 * @param {unknown} data - The `data` parameter is of type `unknown`, which means it can accept any
 * type of data.
 */
export function saveLocalStorage(KeyName: str, data: unknown) {
	localStorage.setItem(KeyName, JSON.stringify(data));
	return {
		status: true,
		Code: StatusCodes.CREATED,
		message: 'Data saved successfully',
		StorageName: 'Local Storage',
	};
}

type ReturnType = {
	status: boolean;
	Code: int;
	message: str;
	StorageName: str;
	data: unknown;
};

/**
 * The function retrieves data from the local storage and returns a response object with the retrieved
 * data.
 * @param {str} KeyName - The KeyName parameter is a string that represents the name of the key in the
 * local storage from which you want to retrieve the data.
 * @returns an object of type ReturnType.
 */
export function getLocalStorage(KeyName: str) {
	const data = localStorage.getItem(KeyName);
	const Response: ReturnType = {
		status: true,
		Code: StatusCodes.OK,
		message: 'Data retrieved successfully',
		StorageName: 'Local Storage',
		data: JSON.parse(data ? data : 'null'),
	};
	return Response;
}

/**
 * The function removes a specified item from the local storage and returns a success message.
 * @param {str} KeyName - The KeyName parameter is a string that represents the name of the key in the
 * local storage that you want to remove.
 * @returns An object is being returned with the following properties:
 * - status: a boolean value indicating whether the data was removed successfully
 * - message: a string message indicating the result of the removal operation
 * - StorageName: a string indicating the type of storage being used, in this case, "Local Storage"
 */
export function removeLocalStorage(KeyName: str) {
	localStorage.removeItem(KeyName);
	return {
		status: true,
		Code: StatusCodes.ACCEPTED,
		message: 'Data removed successfully',
		StorageName: 'Local Storage',
	};
}

/**
 * The function updates the data in the local storage with the provided key name.
 * @param {str} KeyName - The KeyName parameter is a string that represents the key under which the
 * data will be stored in the local storage.
 * @param {unknown} data - The `data` parameter is of type `unknown`, which means it can accept any
 * type of data. It is the data that you want to store in the local storage.
 * @returns An object is being returned with the following properties:
 * - status: a boolean value indicating whether the data was updated successfully
 * - message: a string message indicating the result of the update
 * - StorageName: a string indicating the name of the storage (in this case, 'Local Storage')
 */
export function updateLocalStorage(KeyName: str, data: unknown) {
	localStorage.removeItem(KeyName);
	localStorage.setItem(KeyName, JSON.stringify(data));
	return {
		status: true,
		Code: StatusCodes.ACCEPTED,
		message: 'Data updated successfully',
		StorageName: 'Local Storage',
	};
}

/**
 * The function `clearLocalStorage` clears the local storage and returns a success message.
 * @returns An object is being returned with the following properties:
 * - status: a boolean value indicating whether the local storage was cleared successfully
 * - message: a string message indicating the result of the operation
 * - StorageName: a string indicating the name of the storage that was cleared (in this case, "Local
 * Storage")
 */
export function clearLocalStorage() {
	localStorage.clear();
	return {
		status: true,
		Code: StatusCodes.ACCEPTED,
		message: 'Local Storage cleared successfully',
		StorageName: 'Local Storage',
	};
}
