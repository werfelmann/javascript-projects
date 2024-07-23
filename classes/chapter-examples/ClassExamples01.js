//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, gender){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.gender = gender;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.

let eagle = new Astronaut('Eagle', 10, 15, 'female');

console.log(eagle);

eagle.age = 11;
eagle.color = 'black';

console.log(eagle.gender);