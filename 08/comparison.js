console.log(2 > 1); //true
console.log(2 < 1); //false
console.log(2 >= 1); //true
console.log(2 <= 1); //false
console.log(2 == 1); //false
console.log(2 != 1); //true

console.log("2" > 1); //true //comparing string with number, string will be converted to number and then compared
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null < 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true //true because null is converted to 0 and 0 >= 0 is true
console.log(null <= 0); //true

console.log(undefined > 0); //false //undefined is converted to NaN, and NaN is not greater than 0
console.log(undefined < 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined <= 0); //false

// ** === ** //checks for value as well as type(datatype) of the variable
console.log(2 === 2); //true
console.log("2" === 2); //false
