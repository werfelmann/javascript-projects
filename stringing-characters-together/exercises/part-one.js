let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
let numString = String(num);
console.log(numString.length);


//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimalNum = 123.45;
let decimalNumString = String(123.45);
console.log(decimalNumString.length - 1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (numString.indexOf(".") === -1) {
    console.log(numString.length);
} else {
    console.log(numString.length - 1);
}