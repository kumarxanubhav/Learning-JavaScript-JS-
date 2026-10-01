// **NUMBER**
let score = "33";
console.log(typeof score);

let valueInNumber = Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);

// 33 => number, "33" => number, "33abc" => NaN, true => 1, false => 0, null => 0, undefined => NaN;
// typeof NaN => number, null => object, undefined => undefined;

// **BOOLEAN**
let isLoggedIn = 1;
console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true, 0 => false, 2 => true, "1" => true, "0" => true, "Anubhav" => true, "" => false, null => false, undefined => false, NaN => false;

// **STRING**
let someNumber = undefined;
console.log(typeof someNumber);

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// 33 => 33, "33" => 33, true => "true", false => "false", null => "null", undefined => "undefined", NaN => "NaN";

// ********** OPERATIONS **********

console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 2); // 4
console.log(2 ** 3); // 8
console.log(2 / 2); // 1
console.log(2 % 2); // 0

let str1 = "Hello";
let str2 = " Anubhav";
let str3 = str1 + str2;
console.log(str3); //Hello Anubhav

let value = 3;
let negValue = -value;
console.log(negValue); // -3

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(((3 + 4) * 5) % 3); // 2

console.log(+true); // 1
console.log(+false); // 0

console.log(true+); //error
console.log(false+); //error

console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; //bad practice, keep things easy, simple & readable

let gameCounter = 100;
let finalCounter = gameCounter++;
console.log(gameCounter); //101
console.log(finalCounter); //100

let gameCounter2 = 100;
let finalCounter2 = ++gameCounter2;
console.log(gameCounter2); //101
console.log(finalCounter2); //101