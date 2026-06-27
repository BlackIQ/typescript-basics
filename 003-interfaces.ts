// Interfaces

// We make an interface like this to prevent using a wrong type of variable
// Right now name is string, age is number and others
interface PersonInterface {
  name: string; // Name is required and string
  age: number; // Age is required and number
  isMale: boolean; // isMake is required and boolean
  friends: string[]; // Friends is required and array of strings
  spouse?: string; // Spouse is optional but string
}

// A person with out Spouse
const Amirhossein: PersonInterface = {
  name: "Amirhossein",
  age: 24,
  isMale: true,
  friends: ["Sina", "Kasra"],
};

// A person with Spouse
const Beyonce: PersonInterface = {
  name: "Beyonce",
  age: 44,
  isMale: false,
  friends: ["Rihanna", "Adele", "Shakira"],
  spouse: "Jay Z",
};

console.log(Amirhossein.spouse);
console.log(Beyonce.spouse)