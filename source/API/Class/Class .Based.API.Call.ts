/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/naming-convention */

// This Call Function For Register API Base Domain

// Import All API Functions
import {
	GetFetch,
	DeleteFetch,
	PostFetch,
	PutFetch,
	PatchFetch,
	FormDataPost,
	FormDataPut,
	FormDataPatch,
	FormDataDelete,
} from '../Function/API.config'; // Import All API Functions

// Custom Types
type str = string;
type int = number;

// Interfaces & Types for RegisterAPIBaseDomain
type RegisterAPIBaseDomainInterface = {
	APIBaseDomain?: str;
	PORT?: int;
	Headers?: Headers;
};

export class RegisterAPIBaseDomain {
	// Properties
	private readonly APIBaseDomain: str | undefined;
	private readonly PORT: int | undefined;
	private readonly Headers?: Headers;

	// Constructor
	/**
   * The constructor function initializes the APIBaseDomain, PORT, and Headers properties of a class
   * instance.
   * @param {RegisterAPIBaseDomainInterface}  - - `APIBaseDomain`: The base domain of the API. It is used
   * to construct the URL for API requests. If not provided, it defaults to `http://localhost:${PORT ??
   * 3000}`.
   * `PORT`: The port number of the API. It is used to construct the URL for API requests. If not provided, it defaults to `3000`.
   * `Headers`: The headers for the base domain of an API. If not provided, it defaults to `undefined`. & use  {contentType: 'application/json'} for JSON
   */
	constructor({
		APIBaseDomain,
		PORT,
		Headers,
	}: RegisterAPIBaseDomainInterface) {
		this.APIBaseDomain = APIBaseDomain ?? `http://localhost:${PORT ?? 3000}`;
		this.Headers = Headers ?? undefined;
	}

	/**
   * The function returns the API base domain.
   * @returns The API base domain.
   */
	GetAPIBaseDomain() {
		return this.APIBaseDomain;
	}

	/**
   * The function returns the headers for the base domain of an API.
   * @returns the value of the "Headers" property.
   */
	GetAPIBaseDomainHeaders() {
		return this.Headers;
	}

	/**
   * The function `Get` makes an asynchronous HTTP GET request using the Fetch API.
   * @param {str} Path - The `Path` parameter is a string that represents the endpoint or path of the API
   * you want to call. It is used to construct the URL for the API request.
   * @param {Headers} Headers - The `Headers` parameter is an optional object that specifies the headers
   * @returns the result of the `GetFetch` function, which is likely a promise or an asynchronous
   * operation.
   */
	async Get(Path: str, CallHeaders?: Headers): Promise<any> {
		return GetFetch(
			`${this.APIBaseDomain}${Path}`,
			CallHeaders ? CallHeaders : this.Headers,
		);
	}

	/**
   * The function `Post` sends a POST request to a specified path with a given body.
   * @param {str} Path - The `Path` parameter is a string that represents the endpoint or path of the API
   * that you want to make a POST request to. It should include any necessary query parameters or
   * additional path segments.
   * @param {any} Body - The `Body` parameter is the data that you want to send in the request body. It
   * can be of any type, such as a string, object, or array. The data will be serialized and sent as the
   * request payload.
   * @param {Headers} Headers - The `Headers` parameter is an optional object that specifies the headers
   * @returns The `Post` function is returning the result of the `PostFetch` function, which is being
   * called with the `this.APIBaseDomain`, `Body`, and `this.Headers` as arguments.
   */
	async Post(Path: str, Body: any, CallHeaders?: Headers): Promise<any> {
		return PostFetch(
			`${this.APIBaseDomain}${Path}`,
			Body,
			CallHeaders ? CallHeaders : this.Headers,
		);
	}

	/**
   * The function `Put` sends a PUT request to a specified path with a given body.
   * @param {str} Path - The `Path` parameter is a string that represents the endpoint or path of the API
   * that you want to send a PUT request to. It typically starts with a forward slash ("/") and may
   * include additional segments or parameters depending on the API's requirements.
   * @param {any} Body - The `Body` parameter is the data that you want to send in the request body. It
   * can be of any type, such as a string, object, or array.
   * @returns The `Put` function is returning the result of the `PutFetch` function call.
   */
	async Put(Path: str, Body: any, CallHeaders?: Headers): Promise<any> {
		return PutFetch(
			`${this.APIBaseDomain}${Path}`,
			Body,
			CallHeaders ? CallHeaders : this.Headers,
		);
	}

	/**
   * The function `Delete` is an asynchronous function that sends a DELETE request to a specified path
   * using the `DeleteFetch` function with the API base domain and headers.
   * @param {str} Path - The `Path` parameter is a string that represents the path of the resource that
   * you want to delete. It is used to construct the URL for the delete request.
   * @returns The `Delete` function is returning the result of the `DeleteFetch` function.
   */
	async Delete(Path: str, CallHeaders?: Headers): Promise<any> {
		return DeleteFetch(
			`${this.APIBaseDomain}${Path}`,
			CallHeaders ? CallHeaders : this.Headers,
		);
	}

	/**  The function `Patch` is an asynchronous function that sends a PATCH request to a specified path
   * using the `PatchFetch` function with the API base domain and headers.
   * @param {str} Path - The `Path` parameter is a string that represents the path of the resource that
   *  you want to patch. It is used to construct the URL for the patch request.
   * @returns The `Patch` function is returning the result of the `PatchFetch` function.
   */

	async Patch(Path: str, Body: any, CallHeaders?: Headers) {
		return PatchFetch(
			`${this.APIBaseDomain}${Path}`,
			Body,
			CallHeaders ? CallHeaders : this.Headers,
		);
	}

	/**  The function `FormDataPost` is an asynchronous function that sends a POST request to a specified path
   * using the `FormDataPost` function with the API base domain and headers.
   * @param {str} Path - The `Path` parameter is a string that represents the path of the resource that
   *  you want to post. It is used to construct the URL for the post request.
   * @returns The `FormDataPost` function is returning the result of the `FormDataPost` function.
   */

	async FormDataPost(Path: str, Body: FormData) {
		return FormDataPost(`${this.APIBaseDomain}${Path}`, Body);
	}

	/**  The function `FormDataPut` is an asynchronous function that sends a PUT request to a specified path
   * using the `FormDataPut` function with the API base domain and headers.
   * @param {str} Path - The `Path` parameter is a string that represents the path of the resource that
   *  you want to put. It is used to construct the URL for the put request.
   * @returns The `FormDataPut` function is returning the result of the `FormDataPut` function.
   */

	async FormDataPut(Path: str, Body: FormData) {
		return FormDataPut(`${this.APIBaseDomain}${Path}`, Body);
	}

	/**  The function `FormDataPatch` is an asynchronous function that sends a PATCH request to a specified path
   * using the `FormDataPatch` function with the API base domain and headers.
   * @param {str} Path - The `Path` parameter is a string that represents the path of the resource that
   *  you want to patch. It is used to construct the URL for the patch request.
   * @returns The `FormDataPatch` function is returning the result of the `FormDataPatch` function.
   */

	async FormDataPatch(Path: str, Body: FormData) {
		return FormDataPatch(`${this.APIBaseDomain}${Path}`, Body);
	}

	/**  The function `FormDataDelete` is an asynchronous function that sends a DELETE request to a specified path
   * using the `FormDataDelete` function with the API base domain and headers.
   * @param {str} Path - The `Path` parameter is a string that represents the path of the resource that
   *  you want to delete. It is used to construct the URL for the delete request.
   * @returns The `FormDataDelete` function is returning the result of the `FormDataDelete` function.
   */

	async FormDataDelete(Path: str, Body: FormData) {
		return FormDataDelete(`${this.APIBaseDomain}${Path}`, Body);
	}
}
