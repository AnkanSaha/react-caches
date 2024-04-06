/* eslint-disable @typescript-eslint/naming-convention */

// Import All Cache Storage Functions
import Cache_Storage from "../Storage/Class/Class.Based.Cache.Storage"; // Import All Cache Storage Functions


// Import Random Generator
import {
  randomBoolean,
  randomMixed,
  randomNumber,
  randomSymbol,
  randomWord,
} from "../React Common Services/Uniquegen/uniquegen"; // Import Random Generator
// Import All Local Storage Functions
import {
  clearLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  saveLocalStorage,
  updateLocalStorage,
} from "../Storage/Function/Local.Storage"; // Import All Local Storage Functions

// Import All Session Storage Functions
import {
  clearSession,
  getSession,
  removeSession,
  saveSession,
  updateSession,
} from "../Storage/Function/Session.Storage"; // Import All Session Storage Functions

// Import API functions from API.ts
import {
  GetFetch,
  PostFetch,
  PutFetch,
  DeleteFetch,
  PatchFetch,

  // Import Form API
  FormDataPost,
  FormDataPut,
  FormDataPatch,
  FormDataDelete,
} from "../API/Function/API.config"; // Import API functions from API.ts
import { RegisterAPIBaseDomain } from "../API/Class/Class .Based.API.Call"; // Import API functions from API.ts

// Crypto Functions
import { reActUpdateDocumentTitle } from "../React Common Services/Update.Document.Title"; // Import Crypto Functions
import { ReactEncryption } from "../Encryption (Outers Service)/Class/Class.Based.Encryption.Call"; // Import Crypto Functions
import isDeviceMobileOrDesktop from "../React Common Services/is.Device.Mobile.Desktop";

/* The code is exporting two variables, `CacheStorage` and `IndexedDB`, which are assigned to the
classes `Cache_Storage` and `IndexedDB_Storage` respectively. This allows other modules or files to
import and use these classes for cache storage and IndexedDB operations. */

export const CacheStorage = Cache_Storage; // Export Cache Storage Class

/* The code is exporting an object named `LocalStorage` with multiple properties. Each property
represents a function from the `Local Storage` module. These functions are used to interact with the
browser's local storage. */
export const LocalStorage = {
  saveLocalStorageData: saveLocalStorage,
  getLocalStorageData: getLocalStorage,
  removeLocalStorageData: removeLocalStorage,
  clearLocalStorageData: clearLocalStorage,
  updateLocalStorageData: updateLocalStorage,
};

/* The code is exporting an object named `SessionStorage` with multiple properties. Each property
represents a function from the `Session Storage` module. */
export const SessionStorage = {
  saveSessionData: saveSession,
  getSessionData: getSession,
  removeSessionData: removeSession,
  clearSessionData: clearSession,
  updateSessionData: updateSession,
};

// Export React Common Functions
export const React = {
  UpdateDocumentTitle: reActUpdateDocumentTitle,
  Fetch: {
    Get: GetFetch,
    Post: PostFetch,
    Put: PutFetch,
    Delete: DeleteFetch,
    Patch: PatchFetch,
    FormDataActions: {
      Post: FormDataPost,
      Put: FormDataPut,
      Patch: FormDataPatch,
      Delete: FormDataDelete,
    },
  },
  Random: {
    Boolean: randomBoolean,
    Number: randomNumber,
    Word: randomWord,
    Symbol: randomSymbol,
    Mixed: randomMixed,
  },
  ClassBasedFunctions: {
    API: RegisterAPIBaseDomain,
    ReactEncrypt: ReactEncryption,
  },
  isDeviceMobileOrDesktop
}; // End of React
