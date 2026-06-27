"use strict";
// Variables
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Amirhossein"; // var company is always string
let age = 24; // var age is always number
let isMale = true; // var isPublished is always boolean
let odds = [1, 3, 5, 7, 9]; // Array of numbers
let evens = [2, 4, 6, 8]; // Array of numbers
let friends = ["Reza", "Sina", "Kasra"]; // Array of strings
let x = "Amirhossein"; // This var can be anything
let xArr = ["Amir", 24, true, null, [], {}]; // This array can have anything
// Functions
const concatStrings = (a, b) => {
    // This function get 2 variables that both are string
    // It returns always string
    return a + b;
};
const plusNumber = (a, b) => {
    // This function get 2 variables that both are number
    // It returns always number
    return a + b;
};
const nameAge = (name, age) => {
    // This function get a name as string and age as number
    // It returns a hi string
    return `${name} has ${age} years old!`;
};
console.log(concatStrings("Hello ", "Amir"));
console.log(plusNumber(2, 22));
console.log(nameAge("Amirhossein", 24));
//# sourceMappingURL=002-functions.js.map