// JavaScript Symbols where a new primitive data type introduced with ES6.
// Every value returned from a symbol is unique, meaning that we can use them as identifiers for object properties.
// In this challenge, you will create a user object that has three properties, username, password, and age.
// Using JavaScript Symbols, ensure that username and password are private fields on the user character.
// This means they shouldn't be accessible by calling user.username or user.password

// solution
// frst create 2 symbols 1.username 2.password
const username = Symbol("username");
const password = Symbol("password");

// create a user obj
const user = {
  [username]: "riya",
  [password]: "123",
  age: 12,
};
console.log(user.username);
console.log(user.password);
