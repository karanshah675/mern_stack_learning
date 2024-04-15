 

### Web Storage in JavaScript

Web storage provides a way to store data locally within the user's browser. There are two main types of web storage: `localStorage` and `sessionStorage`.

#### 1. localStorage

- `localStorage` stores data with no expiration date. This means the data will persist even after the browser is closed and reopened.

##### Example:
```javascript
// Storing data in localStorage
localStorage.setItem('key', 'value');

// Retrieving data from localStorage
const data = localStorage.getItem('key');

// Removing data from localStorage
localStorage.removeItem('key');

// Clearing all data from localStorage
localStorage.clear();
```

#### 2. sessionStorage

- `sessionStorage` stores data for one session only. The data is cleared when the browser tab is closed.

##### Example:
```javascript
// Storing data in sessionStorage
sessionStorage.setItem('key', 'value');

// Retrieving data from sessionStorage
const data = sessionStorage.getItem('key');

// Removing data from sessionStorage
sessionStorage.removeItem('key');

// Clearing all data from sessionStorage
sessionStorage.clear();
```

#### Notes:
- Both `localStorage` and `sessionStorage` store data as key-value pairs.
- The data stored in web storage is limited to strings. If you need to store objects or arrays, you'll need to serialize and deserialize them using methods like `JSON.stringify()` and `JSON.parse()`.
- Web storage is domain-specific. Data stored on one domain cannot be accessed by another domain due to security restrictions.

