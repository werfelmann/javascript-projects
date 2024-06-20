let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split(' '));

//the delimiter inside the .split() method determines the way the sting is broken up

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join('a'));

//the connector inside the .join() method is placed between each character in the string.

//3) Do split or join change the original string/array?

console.log(str);
console.log(arr);

//these methods do not change the original string or array.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

// cargoHold = cargoHold.split(',');
// cargoHold.sort();
// cargoHold = cargoHold.join(" ");
// console.log(cargoHold);

console.log(cargoHold = cargoHold.split(',').sort().join(", "));