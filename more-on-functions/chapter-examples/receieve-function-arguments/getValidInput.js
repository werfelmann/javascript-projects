const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"

let startsWithA = function(word) {
  if (word[1] === "a" || word[1] === "e" || word[1] === "i" || word[1] === "o" || word[1] === "u") {
    return false;
  }
  return true;
}

// TODO 2: write a validator 
// that ensures input is a vowel

console.log(getValidInput('Type a word that begins with "a": ', startsWithA));

// Be sure to test your code!
