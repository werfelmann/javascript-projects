let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let microAnimal = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, microAnimal];

let isUnique = function(num, arr) {
   if (arr.includes(num)) {
      return false;
   } else {
      return true;
   }
};

let assignAstroID = function(arr) {
   idArray = [];

   for (let i = 0; i < arr.length; i++) {
      while (idArray.length < arr.length) {
         let randomID = Math.ceil(Math.random()*10);

         if (isUnique(randomID, idArray)) {
            idArray.push(randomID);
         }
      }
      arr[i].astroID = idArray[i];
   };
   return arr;
};

let addMoveMethod = function (arr) {
   for (i = 0; i < arr.length; i++) {
      arr[i].move = function() {
         return Math.floor(Math.random()*11);
      }
   }
}



assignAstroID(crew);
addMoveMethod(crew)
console.log(microAnimal.move());


// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

let crewReports = function(arr) {
   for (i=0; i<arr.length; i++) {
      console.log(`${arr[i].name} is a ${arr[i].species}. They are ${arr[i].age} years old and ${arr[i].mass} kilograms. Their ID is ${arr[i].astroID}.`)
   }
   return;
};

crewReports(crew);

// Start an animal race!

let fitnessTest = function (arr) {
   
   
   for (i=0; i<arr.length; i++) {
      let turns = 0;
      let totalSteps = 0;
      
      while (totalSteps < 20) {
         let turnSteps = arr[i].move();
         totalSteps += turnSteps;
         turns++
      }
      
      console.log(`${arr[i].name} took ${turns} turns to take 20 steps.`)
   }
   return;
}

fitnessTest(crew);