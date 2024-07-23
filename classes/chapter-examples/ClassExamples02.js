// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name = 'unnamed', age = 'unknown age', mass ='unknown age'){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let tortoise = new Astronaut('Speedy', 120);

console.log(tortoise.name, tortoise.age, tortoise.mass);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!

let eagle = new Astronaut();

console.log(eagle);

class Car {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }
}

let newCar = new Car('Toyota', 2024);

console.log(typeof newCar.make, typeof newCar.year);