// Read Only

// Union
type UUID = string | number;

// Enum
enum Department {
  Financial = "Financial",
  IT = "IT",
  ICT = "ICT",
  Software = "Software",
  HR = "HR",
}

// Interface
interface Employee {
  readonly id: UUID; // Using union
  department: Department; // Using enum
  readonly hireDate: Date; // This field is now read only!
  name: string;
  age: number;
}

// Make a user
const Amirhossein: Employee = {
  id: 124578936,
  department: Department.ICT,
  hireDate: new Date(),
  name: "Amirhossein",
  age: 24,
};

console.log(Amirhossein);

Amirhossein.name = "Amirhossein Mohammadi";
// Amirhossein.id = 2; // You can't. ID is readonly
Amirhossein.department = Department.Software;

console.log(Amirhossein);
