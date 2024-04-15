// JSON = (JavaScript Object Notation) data-interchange format
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object

//example of stringify() method:

const names = ["karan", "jay", "rock", "justin"];
const person = {
  name: "karan",
  age: 19,
  skills: ["html", "css", "js"],
};
const people = [
  {
    name: "karan",
    age: 19,
    skills: ["html", "css", "js"],
  },
  {
    name: "jay",
    age: 13,
    skills: ["html", "css"],
  },
  {
    name: "rock",
    age: 22,
    skills: ["html", "css", "js", "gym"],
  },
  {
    name: "justin",
    age: 25,
    skills: ["html", "css", "js", "singging"],
  },
];

let jsonStringifyNames = JSON.stringify(names);
let jsonStringifyPeople = JSON.stringify(people);
let jsonStringifyPerson = JSON.stringify(person);

console.log(jsonStringifyNames);
console.log(jsonStringifyPerson);
console.log(jsonStringifyPeople);

//example of json.parse() method:
const names2 = `["karan", "jay", "rock", "justin"]`;
const person2 = `{
  name: "karan",
  age: 19,
  skills: ["html", "css", "js"],
}`;
const people2 = `[
  {
    name: "karan",
    age: 19,
    skills: ["html", "css", "js"],
  },
  {
    name: "jay",
    age: 13,
    skills: ["html", "css"],
  },
  {
    name: "rock",
    age: 22,
    skills: ["html", "css", "js", "gym"],
  },
  {
    name: "justin",
    age: 25,
    skills: ["html", "css", "js", "singging"],
  },
]`;

let jsonParseNames = JSON.stringify(names2);
let jsonParsePeople = JSON.stringify(people2);
let jsonParsePerson = JSON.stringify(person2);

console.log(jsonParseNames);
console.log(jsonParsePeople);
console.log(jsonParsePerson);
