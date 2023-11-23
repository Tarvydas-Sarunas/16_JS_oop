"use strict";
console.log("EmployeeClass.js file was loaded");

class Employee {
  firstName;
  lastName;
  constructor(argName, argSurname) {
    this.firstName = argName;
    this.lastName = argSurname;
  }

  printFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  // imituojam abstrakcia klase
  calcPay() {
    throw new Error("reikia aprasyti calcPay");
  }
}

class Worker extends Employee {
  hoursWorked = 0;
  hourlyPay;
  constructor(name, lastName, argDollarPerHour) {
    // iskviesti tevines klases konstruktorius
    super(name, lastName);
    this.hourlyPay = argDollarPerHour;
  }
}

// sukurti TownWorker clase,
class TownWorker extends Worker {
  town;
  constructor(tWname, tWlastName, tWdollarPerHour, argTown) {
    // iskviesti tevines klases konstruktorius
    super(tWname, tWlastName, tWdollarPerHour);
    this.town = argTown;
  }
}
// ta klase praplecia townWorkeri
// sukurdami pridedame miesta

const em1 = new Employee("Jams", "Bond");
const work1 = new Worker("Mike", "Kurt", 10);
const tWork1 = new TownWorker("Jane", "Dow", 12, "Vilnius");
console.log("em1 ===", em1);
em1.printFullName();
console.log("work1 ===", work1);
console.log("work1 ===", tWork1);
