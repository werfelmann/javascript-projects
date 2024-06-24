/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//a. Print the numbers 0 - 20, one number per line.
console.log ("1.a Begin:");

for (i = 0; i < 21; i++) {
  console.log(i);
}

console.log ("End of 1.a");
//b. Print only the ODD values from 3 - 29, one number per line.
console.log ("1.b Begin:");

for (i = 3; i < 30; i += 2) {
  console.log(i);
}

console.log ("End of 1.b");


//c. Print the EVEN numbers 12 to -14 in descending order, one number per line.

console.log("1.c begins:");

for (i = 12; i > -15; i -= 2) {
  console.log(i);
}

console.log("end of 1.c");


//d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

console.log("Challenge:");

for (i = 50; i > 19; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

console.log("End Challenge");

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 

let str = "LaunchCode"
let array = [1, 5, "LC101", "blue", 42]

//a. Print each element of the array to a new line.

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}


//b. Print each character of the string in reverse order to a new line.

for (i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
}

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  //a

  let arrayInit = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
  let arrayEvens = []
  let arrayOdds = []

  for (i = 0; i < arrayInit.length; i++) {
    //need if statement that will add even list items to arrayEvens and odds to arrayOdds
    //first check if the number at index i is even:
    if (arrayInit[i] % 2 === 0) {
      //then add to corresponding array using .push() method
      arrayEvens.push(arrayInit[i]);
    } else {
      arrayOdds.push(arrayInit[i]);
    }
  }
  console.log(arrayInit);
  console.log(arrayEvens);
  console.log(arrayOdds);
