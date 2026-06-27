// Interfaces and Types

// We make an interface like this to prevent using a wrong type of variable
// Right now name is string, age is number and others
interface PersonInterface {
  name: string; // Name is required and string
  age: number; // Age is required and number
  isMale: boolean; // isMake is required and boolean
  friends: string[]; // Friends is required and array of strings
  spouse?: string; // Spouse is optional but string
  sayHi(message: string): void; // A function that gets string and returns a void
  canTalk: boolean;
}

// A person with out Spouse
const Amirhossein: PersonInterface = {
  name: "Amirhossein",
  age: 24,
  isMale: true,
  friends: ["Sina", "Kasra"],

  sayHi(message: string): void {
    console.log(message);
  },
  canTalk: false,
};

// A person with Spouse
const Beyonce: PersonInterface = {
  name: "Beyonce",
  age: 44,
  isMale: false,
  friends: ["Rihanna", "Adele", "Shakira"],
  spouse: "Jay Z",
  sayHi(message: string): void {
    console.log(message);
  },
  canTalk: true,
};

console.log(Amirhossein.spouse);
console.log(Beyonce.spouse);

if (Beyonce.canTalk) {
  Beyonce.sayHi("Halo!!!!!");
}

if (Amirhossein.canTalk) {
  Beyonce.sayHi("Amirhossein can talk like Beyonce!");
}
