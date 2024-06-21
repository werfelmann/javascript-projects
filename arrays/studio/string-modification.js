const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3,10).concat(str.slice(0,3));
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`${newStr} is a mixed up version of ${str}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

userInput = 0;
userInput = input.question("Input how many letters that you want to be relocated: ");
console.log(userInput);

//3) Add validation to your code to deal with user inputs that are longer than the word. 
//In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (userInput > str.length) {
    console.log(`Your entry (${userInput}) exceeds the maximum number of characters possible (${str.length}).`);
    userInput = 3;
} else {
    console.log ("cool!");
}

