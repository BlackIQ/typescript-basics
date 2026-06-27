// Intersections

// We know union from lesson 004
type UUID = string | number;

// We know interface from lesson 003
interface BusinessPartner {
  name: string;
  creditScore: number;
}
interface UserIdentity {
  id: UUID;
  email: string;
}

// So, here is intersection
// What is intersection?
// Combines of 2 interfaces!
type Employee = BusinessPartner & UserIdentity;

// A simple function
const signContact = (employee: Employee): void => {
  console.log(`Contact signed by ${employee.name}!`);
  console.log();
  console.log(`ID: ${employee.id}`);
  console.log(`Email: ${employee.email}`);
  console.log(`Credit score ${employee.creditScore}`);
};

// Define an employee
const Sina: Employee = {
  id: 13579,
  name: "Sina",
  email: "sina@ts.com",
  creditScore: 100,
};

// Sign the contact
signContact(Sina);
