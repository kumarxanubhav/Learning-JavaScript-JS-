//Primitive data types

// 7 types of primitive data types in JavaScript
// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean
// 5. Null
// 6. Undefined
// 7. Symbol

//JavaScript is a dynamically typed language, which means we don't have to specify the data type of a variable when we declare it. The data type will be determined automatically based on the value assigned to the variable.
const score = 100;
console.log(typeof score); //number

const scoreValue = 100.3;
console.log(typeof scoreValue); //number

const isLoggedIn = false; //boolean
console.log(typeof isLoggedIn); //boolean

const outsideTemp = null; //null
console.log(typeof outsideTemp); //object

var userEmail; //undefined
console.log(typeof userEmail); //undefined

// let userEmail = undefined;

const id = Symbol("123");
console.log(id); //Symbol(123)
console.log(typeof id); //symbol

const anotherId = Symbol("123");
console.log(anotherId); //Symbol(123)
console.log(typeof anotherId); //symbol

console.log(id === anotherId); //false

const bigNumber = 1234567890123456789012345678901234567890n; //bigint
console.log(typeof bigNumber); //bigint

// Non-primitive(Reference) data types

// 1. Array
// 2. Object
// 3. Function

const heros = ["Shaktimaan", "Naagraj", "Doga"]; //array
console.log(typeof heros); //object

let myObj = {
  name: "Anubhav",
  age: 22,
}; //object
console.log(typeof myObj); //object

const myFunction = function () {
  console.log("Hello World");
}; //function
console.log(typeof myFunction); //function (object function)

// ********** MEMORY(SStack vs Heap) **********

// Stack(Primitives) vs Heap(Non-primitives/Reference)

let myyoutubeName = "Anubhavkumardotcom";

let anotherName = myyoutubeName;
anotherName = "Kumaranubhavdotcom2";

console.log(myyoutubeName); //Anubhavkumardotcom
console.log(anotherName); //Kumaranubhavdotcom2

let userOne = {
  email: "user@gmail.com",
  upi: "user@upi",
};

let userTwo = userOne;

userTwo.email = "Anubhavkumar@gmail.com";

console.log(userOne.email); // Anubhavkumar@gmail.com
console.log(userTwo.email); // Anubhavkumar@gmail.com
