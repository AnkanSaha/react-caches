# React Caches

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![CodeQL](https://github.com/AnkanSaha/react-caches/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/AnkanSaha/react-caches/actions/workflows/github-code-scanning/codeql)
[![Publish To NPM Package Registry](https://github.com/AnkanSaha/react-caches/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/AnkanSaha/react-caches/actions/workflows/npm-publish.yml)

React Caches is a lightweight and easy-to-use package that simplifies the management of local storage and cache storage in your React-based applications. With this package, you can easily access and manage data stored in local storage, cache storage, and other local storage used by JavaScript. It provides a convenient interface to store and retrieve data, making it seamless to work with client-side storage in your React projects.

# Features

- Simplified access to local storage: Easily store and retrieve data in local storage using simple APIs.
- Cache storage management: Manage cache storage with straightforward methods, allowing you to handle data caching effortlessly.
- Integration with React: Designed to work smoothly with React applications, enabling you to enhance data handling on the client-side.
- Lightweight: The package is lightweight, ensuring it doesn't introduce unnecessary overhead to your application.
- Easy to use: The package offers intuitive APIs, making it user-friendly for developers of all levels.

# Installation

To install the package, run the following command:

```bash
npm install react-caches@latest
```

# Usage

# # Cache Storage

To use the cache storage features, import the CacheStorage Related Functions from the package:

```js
import { CacheStorage } from "react-caches"; // Import Main CacheStorage Object

const CacheStorage = new CacheStorage("DatabaseName"); // Create a new CacheStorage Object

const { receiveCache, saveCacheData, deleteCache, updateCache, clearCache } =
  CacheStorage; // Import all CacheStorage functions

const Data = await receiveCache("Searchkey"); // Receive Cache Data from Cache Storage by Database Name and Search Key

const Response = await saveCacheData("Searchkey", Data); // Save Cache Data to Cache Storage by Database Name and Search Key

const Response = await deleteCache("Searchkey"); // Delete Cache Data from Cache Storage by Database Name and Search Key

const Response = await updateCache("Searchkey", Data); // Update Cache Data in Cache Storage by Database Name and Search Key

const Response = await clearCache(); // Clear Cache Data from Cache Storage by Database Name
```

# Local Storage

To use the local storage features, import the Local Storage Related Functions from the package:

```js
import { LocalStorage } from "react-caches"; // Import Main LocalStorage Object

const {
  getLocalStorageData,
  saveLocalStorageData,
  removeLocalStorageData,
  updateLocalStorageData,
  clearLocalStorageData,
} = LocalStorage; // Import all LocalStorage functions

const Data = getLocalStorageData("Searchkey"); // Get Local Storage Data from Local Storage by Search Key

const Response = saveLocalStorageData("Searchkey", Data); // Save Local Storage Data to Local Storage by Search Key

const Response = removeLocalStorageData("Searchkey"); // Remove Local Storage Data from Local Storage by Search Key

const Response = updateLocalStorageData("Searchkey", Data); // Update Local Storage Data in Local Storage by Search Key

const Response = clearLocalStorageData(); // Clear Local Storage Data from Local Storage
```

# Session Storage

To use the session storage features, import the Session Storage Related Functions from the package:

```js
import { SessionStorage } from "react-caches"; // Import Main SessionStorage Object

const {
  getSessionData,
  saveSessionData,
  removeSessionData,
  updateSessionData,
  clearSessionData,
} = SessionStorage; // Import all SessionStorage functions

const Data = getSessionData("Searchkey"); // Get Session Storage Data from Session Storage by Search Key

const Response = saveSessionData("Searchkey", Data); // Save Session Storage Data to Session Storage by Search Key

const Response = removeSessionData("Searchkey"); // Remove Session Storage Data from Session Storage by Search Key

const Response = updateSessionData("Searchkey", Data); // Update Session Storage Data in Session Storage by Search Key

const Response = clearSessionData(); // Clear Session Storage Data from Session Storage
```

# IndexedDB

To use the IndexedDB features, import the IndexedDB Related Functions from the package, Remember that IndexedDB is an object-oriented database, so you need to create a database and object store before using it:

```js
import { IndexedDB } from 'react-caches'; // Import Main IndexedDB Object

const {createData, readData, updateData, deleteData} = new IndexedDB('DatabaseName', 'Database Version' 'ObjectStoreName'); // Create a new IndexedDB Database and Object Store with Database Name, Database Version and Object Store Name

const Response = await createData('Searchkey', Data); // Create Data in IndexedDB by Search Key

const Data = await readData('Searchkey'); // Read Data from IndexedDB by Search Key

const Response = await updateData('Searchkey', Data); // Update Data in IndexedDB by Search Key

const Response = await deleteData('Searchkey'); // Delete Data from IndexedDB by Search Key
```

# Encryption - Decryption

### If You Want to Use Encrypt and Decrypt, You Need To Install in your Server Side

```shell
npm i outers@latest --save
```

```javascript
const {React as Service} = require('react-caches'); // Import
const Crypto = new Service.ClassBasedFunctions.ReactEncrypt("Key"); // Create Instance

const EncryptedData = await Crypto.Encrypt("Data"); // Encrypt Data

const DecryptedData = await Crypto.Decrypt("EncryptedData"); // Decrypt Data
```
