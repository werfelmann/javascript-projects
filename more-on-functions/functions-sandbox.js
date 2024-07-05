// let f1 = function(str) {
//     return str + str;
// };

// let f2 = f1;

// console.log(f1("abcd"));


// function decreasingSum(integer) {
//     if (integer === 1){
//         return integer;
//     } else {
//         return integer + (decreasingSum(integer-1));
//     }
// }

// console.log(decreasingSum(5));


// write a function that returns the product of two numbers

// function product(num1, num2) {
//     if (!isNaN(num1) && !isNaN(num2)) {
//         return num1 * num2;
//     } else {
//         return "invalid input"
//     }
// }

// console.log(product('5', '3'));


//use the map.() method to return a new array with the last character of each element within the array

// let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// let lastCharArr = names.map(function (str) {
//     return str.charAt(str.length - 1);
// })

// console.log(lastCharArr);

// let arr = [1, 2, 3];

// let result = arr.map(function(element, index, array) {
//     console.log(element, index, array);
//     return element * 2;
// });

// console.log(result);

// let add = function(a, b) {
//     return a + b;
// };

// let subtract = function(a, b) {
//     return a - b;
// }

// let multiply = function(a, b) {
//     return a * b;
// };

// let divide = function(a, b) {
//     return a / b;
// }

// let calculate = function(operation, a, b) {
//     return operation(a, b);
// };

// console.log(calculate(add, 5, 3)); // Output: 8
// console.log(calculate(subtract, 8, 4));
// console.log(calculate(multiply, 2, 5));
// console.log(calculate(divide, 100, 25));

// let myArr = [4, 'ten', 2.5, 'corn on the cob'];

// let mapFunc = function(arrayElement) {
//     if (typeof arrayElement === 'number') {
//         arrayElement = arrayElement * 2;
//         return arrayElement
//     } else if (typeof arrayElement === 'string') {
//         arrayElement = arrayElement.substring(1);
//         return arrayElement
//     } else {
//         return arrayElement;
//     }
// }

// let myMappedArr = myArr.map(mapFunc);
// console.log(myMappedArr);


// let numArray = [1, 2, 3, 4, 5];
// let squarFunc = function(num) {
//     num = num**2;
//     return num;
// }
// // console.log(numArray.map(squarFunc));
// console.log(squarFunc(2));


// let wordsArr = ['apple', 'banana', 'cherry'];


// let capitalizeFunc = function(word) {
//     capitalWord = word[0].toUpperCase() + word.slice(1);
//     return capitalWord;
// };

// let wordsArrCapital = wordsArr.map(capitalizeFunc);

// console.log(wordsArr.map(capitalizeFunc));


// let wordsArr2 = ['dog', 'cat', 'elephant'];

// let firstLetter = function(word) {
//     let initial = word[0];
//     return initial;
// }

// console.log(wordsArr2.map(firstLetter));

// let verbs = ['run', 'jump', 'swim'];

// let ingifyVerbs = function(verb) {
//     if (verb[verb.length - 1] === 'n' || verb[verb.length - 1] === 'm') {
//         return verb + verb[verb.length - 1] + 'ing'
//     } else {
//         return verb + 'ing';
//     }
// };

// console.log(verbs.map(ingifyVerbs));

let people = [
    { name: 'John', age: 17 },
    { name: 'Jane', age: 22 },
    { name: 'Mike', age: 15 },
    { name: 'Emma', age: 30 },
]

// let addIsAdultProperty = function(person) {
//     let age = person.age;
    
//         return { 
//             ...person,
//             isAdult: age >= 18
//         };

// }

// let updatedPeople = people.map(addIsAdultProperty);

// console.log(updatedPeople);

let myObject1 = {
    name: "Michael",
    color: "blue"
};

let myObject2 = {
    name: "David",
    color: "green"
};

let myObject3 = {
    name: "Jake",
    color: "red"
};

let myObject4 = {
    name: "Beren",
    color: "gold"
};

let myObject5 = {
    name: "Carla",
    color: "lavender"
};

let myObject6 = {
    name: "Joel",
    color: "brown"
};

let myObject7 = {
    name: "Darlene",
    color: "pink"
};

let myObject8 = {
    name: "Matt",
    color: "black"
};

let myObject9 = {
    name: "Eric",
    color: "purple"
};



let objectArray = [myObject1, myObject2, myObject3, myObject4, myObject5, myObject6, myObject7, myObject8, myObject9]

let isUnique = function(num, arr) {
    if (arr.includes(num)) {
       return false;
    } else {
       return true;
    }
 };

let assignRandomNumber = function(arr) {
    let randomArray = [];

    for (i = 0; i < arr.length; i++) {
        while (randomArray.length < arr.length) {
            let randomNumber = Math.ceil(Math.random()*10)
    
            if (isUnique (randomNumber, randomArray)) {
                randomArray.push(randomNumber);
                
            }
        }
        arr[i].randomID = randomArray[i];
    }
    
    
    return arr;
}

 console.log(assignRandomNumber(objectArray));