"use strict";
// Functions
Object.defineProperty(exports, "__esModule", { value: true });
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