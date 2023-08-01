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

const {receiveCache, saveCacheData, deleteCache} = CacheStorage; // Import all CacheStorage functions

const Data = await receiveCache('DatabaseName', 'Searchkey'); // Receive Cache Data from Cache Storage by Database Name and Search Key

const Response = await saveCacheData('DatabaseName', 'Searchkey', Data); // Save Cache Data to Cache Storage by Database Name and Search Key

const Response = await deleteCache('DatabaseName', 'Searchkey'); // Delete Cache Data from Cache Storage by Database Name and Search Key
```
