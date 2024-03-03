/* eslint-disable @typescript-eslint/naming-convention */
// Global types
type str = string;
type int = number;

import StatusCodes from "../../Status Codes/StatusCodes"; // Import Status Codes

// Global functions

/**
 * The function `saveSession` saves data to the session storage and returns a success message along
 * with some additional information.
 * @param {str} KeyName - The KeyName parameter is a string that represents the key under which the
 * data will be saved in the session storage.
 * @param {unknown} data - The `data` parameter is the data that you want to save in the session
 * storage. It can be of any type, such as a string, number, object, or array.
 * @returns an object with the following properties:
 * - status: a boolean value indicating whether the data was saved successfully
 * - message: a string message indicating the result of the save operation
 * - Code: a constant value representing the HTTP status code for the operation (StatusCodes.CREATED)
 * - StorageName: a string indicating the name of the storage where the data was saved (Session
 * Storage)
 */
export function saveSession(KeyName: str, data: unknown) {
  sessionStorage.setItem(KeyName, JSON.stringify(data));
  return {
    status: true,
    message: "Data saved successfully",
    Code: StatusCodes.CREATED,
    StorageName: "Session Storage",
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
 * The function retrieves data from session storage and returns a response object with the retrieved
 * data.
 * @param {str} KeyName - The KeyName parameter is a string that represents the key of the data you
 * want to retrieve from the session storage.
 * @returns an object of type `ReturnType`.
 */
export function getSession(KeyName: str) {
  const data = sessionStorage.getItem(KeyName);
  const Response: ReturnType = {
    status: true,
    message: "Data retrieved successfully",
    Code: StatusCodes.OK,
    StorageName: "Session Storage",
    data: JSON.parse(data ? data : "null"),
  };
  return Response;
}

/**
 * The function removes a data item from the session storage and returns a success message along with
 * additional information.
 * @param {str} KeyName - The KeyName parameter is a string that represents the key of the data you
 * want to remove from the session storage.
 * @returns an object with the following properties:
 * - status: a boolean value indicating whether the data was removed successfully
 * - message: a string message indicating the result of the removal operation
 * - Code: a constant value representing the HTTP status code for the operation (StatusCodes.ACCEPTED)
 * - StorageName: a string indicating the type of storage being used (Session Storage)
 */
export function removeSession(KeyName: str) {
  sessionStorage.removeItem(KeyName);
  return {
    status: true,
    message: "Data removed successfully",
    Code: StatusCodes.ACCEPTED,
    StorageName: "Session Storage",
  };
}

/**
 * The function updates a session storage item with the provided key name and data, and returns a
 * success message along with additional information.
 * @param {str} KeyName - The KeyName parameter is a string that represents the key under which the
 * data will be stored in the session storage. It is used to identify and retrieve the data later when
 * needed.
 * @param {unknown} data - The `data` parameter is the value that you want to store in the session
 * storage. It can be of any type, such as a string, number, object, or array.
 * @returns an object with the following properties:
 * - status: a boolean value indicating whether the data was updated successfully
 * - message: a string message indicating the result of the update
 * - Code: a constant value representing the HTTP status code for the update operation
 * - StorageName: a string indicating the name of the storage where the data was updated (in this case,
 * 'Session Storage')
 */
export function updateSession(KeyName: str, data: unknown) {
  sessionStorage.setItem(KeyName, JSON.stringify(data));
  return {
    status: true,
    message: "Data updated successfully",
    Code: StatusCodes.ACCEPTED,
    StorageName: "Session Storage",
  };
}

/**
 * The function clears the session storage and returns a success message.
 * @returns An object is being returned with the following properties:
 */
export function clearSession() {
  sessionStorage.clear();
  return {
    status: true,
    message: "Session Storage cleared successfully",
    Code: StatusCodes.ACCEPTED,
    StorageName: "Session Storage",
  };
}
