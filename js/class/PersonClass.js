"use strict";
console.log("Person.js file was loaded");

class Person {
  // speciali funkcija kuri yra paleidziama kai sukuriamas objektas
  constructor(argName, argAge, argTown) {
    this.name = argName;
    this.age = argAge;
    this.town = argTown;
  }
}

const user3 = new Person("james", 25, "London");
console.log("user3 ===", user3);
const user1 = {
  name: "James",
  age: 25,
  town: "London",
};
console.log("user1 ===", user1);
const user2 = {
  name: "Jane",
  age: 27,
  town: "Capetown",
};
