"use strict";
// Intersections
Object.defineProperty(exports, "__esModule", { value: true });
// A simple function
const signContact = (employee) => {
    console.log(`Contact signed by ${employee.name}!`);
    console.log();
    console.log(`ID: ${employee.id}`);
    console.log(`Email: ${employee.email}`);
    console.log(`Credit score ${employee.creditScore}`);
};
// Define an employee
const Sina = {
    id: 13579,
    name: "Sina",
    email: "sina@ts.com",
    creditScore: 100,
};
// Sign the contact
signContact(Sina);
//# sourceMappingURL=005-intersections.js.map