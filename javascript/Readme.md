# JavaScript Concepts and Notes

This `README.md` file contains notes on various JavaScript concepts for quick reference.

## Table of Contents

- [Data Types](#data-types)
- [Variables](#variables)
- [Operators](#operators)
- [Control Flow](#control-flow)
- [Functions](#functions)
- [Arrays](#arrays)
- [Objects](#objects)
- [Classes](#classes)
- [DOM Manipulation](#dom-manipulation)
- [Asynchronous JavaScript](#asynchronous-javascript)

## Data Types

JavaScript has several built-in data types, including:

- **Primitive Types:**
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - Symbol (added in ES6)

- **Complex Types:**
  - Object
  - Array
  - Function

## Variables

Variables are used to store data values. They are declared using `var`, `let`, or `const`.

- `var` has function scope.
- `let` has block scope and allows reassignment.
- `const` has block scope and cannot be reassigned.

Example:
```javascript
let message = "Hello, world!";
```

## Operators

JavaScript supports various operators for performing operations on variables and values, including arithmetic, assignment, comparison, logical, etc.

Example:
```javascript
let sum = 10 + 5; // Addition
```

## Control Flow

Control flow statements allow you to execute code conditionally or repeatedly.

- `if...else` statements
- `switch` statement
- Loops: `for`, `while`, `do...while`

Example:
```javascript
let num = 10;
if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
```

## Functions

Functions are reusable blocks of code. They can be declared using the `function` keyword.

Example:
```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

## Arrays

Arrays are used to store multiple values in a single variable.

Example:
```javascript
let colors = ["red", "green", "blue"];
```

## Objects

Objects are collections of key-value pairs and are used to store complex data structures.

Example:
```javascript
let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};
```

## Classes

ES6 introduced classes, which are blueprints for creating objects with predefined properties and methods.

Example:
```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}
```

## DOM Manipulation

DOM manipulation allows you to interact with HTML elements in JavaScript.

Example:
```javascript
document.getElementById("myElement").innerHTML = "New content";
```

## Asynchronous JavaScript

Asynchronous JavaScript allows you to execute code non-sequentially, often used for tasks such as fetching data or timers.

- Callbacks
- Promises
- Async/Await

Example:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
```

