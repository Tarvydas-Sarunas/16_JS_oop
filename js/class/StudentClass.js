"use strict";
console.log("StudentClass.js file was loaded");

class Student {
  // man reikia inicijuoti kad butu nepasiekiama uz klases vidaus ribu
  #name;
  #mathMarks;
  constructor(argName, argMathMarks) {
    this.#name = argName;
    this.#mathMarks = argMathMarks;
  }
  get name() {
    return this.#name;
  }
  // getteris matMarks lesti nuskaityti
  get mathMarks() {
    return this.#mathMarks;
  }
  // setteris matMarks leisti pakeisti
  set mathMarks(newMark) {
    // validacijos
    if (typeof newMarks !== "number") return;
    this.#mathMarks = newMark;
  }
}
const st1 = new Student("James", 5);

console.log("st1 ===", st1.name);
