"use strict";
console.log("Person.js file was loaded");

class Person {
  // speciali funkcija kuri yra paleidziama kai sukuriamas objektas
  constructor(argName, argAge, argTown, argHasCar) {
    this.name = argName;
    this.age = argAge;
    this.town = argTown;
    this.HasCar = argHasCar;
    // this.info();
  }
  //  kiti metodai
  // sukurti info() metodas kuris iskonsolintu 'mano Vardas xx as is xx miesto'
  info() {
    const sakinys = `Mano vardas ${this.name} as is ${this.town} miesto`;
    console.log(sakinys);
  }
  // metodas pakeisti miestui
  changeTown(newTown, argPasword) {
    const password = "123456";
    // validacija
    if (password !== argPasword) {
      console.warn("neteisingas slaptazotis");
      return;
    }
    this.town = newTown;
  }
}

const user3 = new Person("james", 25, "London", true);
user3.changeTown("Exeter", "12345");
const user4 = new Person("jane", 27, "Miestas", false);
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
