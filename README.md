# TypeScript tutorial

A fully intensive TypeScript course for my programming colleagues at the company.

## Step 1

Make a directory and install typescript inside it.

```bash
mkdir tutorial
cd tutorial
npm i typescript
```

## Step 2

You need a `tsconfig.json` file and this is how you get it.

```bash
npx tsc --init
```

## Step 3

Make a file and start writing code.

```bash
touch index.ts
```

```typescript
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

// Make an employee
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
```

# Step 4

Compile and run.

```bash
npx tsc
```

It will generates your compiled TypeScript to JavaScript and you can run using node.

```bash
node dist/006-enums.js
```
