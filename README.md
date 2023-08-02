# React Caches

License Badge
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

### React Caches is a lightweight and easy-to-use package that simplifies the management of local storage and cache storage in your React-based applications. With this package, you can easily access and manage data stored in local storage, cache storage, and other local storage used by JavaScript. It provides a convenient interface to store and retrieve data, making it seamless to work with client-side storage in your React projects.

# Features

* Simplified access to local storage: Easily store and retrieve data in local storage using simple APIs.

* Cache storage management: Manage cache storage with straightforward methods, allowing you to handle data caching effortlessly.

* Integration with React: Designed to work smoothly with React applications, enabling you to enhance data handling on the client-side.

* Lightweight: The package is lightweight, ensuring it doesn't introduce unnecessary overhead to your application.

* Easy to use: The package offers intuitive APIs, making it user-friendly for developers of all levels.


# Installation

To install the package, run the following command:

```bash
npm install react-caches@latest
```

# Usage

# # Cache Storage

To use the cache storage features, import the CacheStorage Related Functions from the package:

```js
import { CacheStorage } from 'react-caches'; // Import Main CacheStorage Object

const {receiveCache, saveCacheData, deleteCache, updateCache, clearCache} = CacheStorage; // Import all CacheStorage functions

const Data = await receiveCache('DatabaseName', 'Searchkey'); // Receive Cache Data from Cache Storage by Database Name and Search Key

const Response = await saveCacheData('DatabaseName', 'Searchkey', Data); // Save Cache Data to Cache Storage by Database Name and Search Key

const Response = await deleteCache('DatabaseName', 'Searchkey'); // Delete Cache Data from Cache Storage by Database Name and Search Key

const Response = await updateCache('DatabaseName', 'Searchkey', Data); // Update Cache Data in Cache Storage by Database Name and Search Key

const Response = await clearCache('DatabaseName'); // Clear Cache Data from Cache Storage by Database Name
```

# Local Storage

To use the local storage features, import the Local Storage Related Functions from the package:

```js
import { LocalStorage } from 'react-caches'; // Import Main LocalStorage Object

const {getLocalStorageData, saveLocalStorageData, removeLocalStorageData, updateLocalStorageData, clearLocalStorageData} = LocalStorage; // Import all LocalStorage functions

const Data = getLocalStorageData('Searchkey'); // Get Local Storage Data from Local Storage by Search Key

const Response = saveLocalStorageData('Searchkey', Data); // Save Local Storage Data to Local Storage by Search Key

const Response = removeLocalStorageData('Searchkey'); // Remove Local Storage Data from Local Storage by Search Key

const Response = updateLocalStorageData('Searchkey', Data); // Update Local Storage Data in Local Storage by Search Key

const Response = clearLocalStorageData(); // Clear Local Storage Data from Local Storage
```

# Session Storage

To use the session storage features, import the Session Storage Related Functions from the package:

```js
import { SessionStorage } from 'react-caches'; // Import Main SessionStorage Object

const {getSessionData, saveSessionData, removeSessionData, updateSessionData, clearSessionData} = SessionStorage; // Import all SessionStorage functions

const Data = getSessionData('Searchkey'); // Get Session Storage Data from Session Storage by Search Key

const Response = saveSessionData('Searchkey', Data); // Save Session Storage Data to Session Storage by Search Key

const Response = removeSessionData('Searchkey'); // Remove Session Storage Data from Session Storage by Search Key

const Response = updateSessionData('Searchkey', Data); // Update Session Storage Data in Session Storage by Search Key

const Response = clearSessionData(); // Clear Session Storage Data from Session Storage
```