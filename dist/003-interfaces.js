"use strict";
// Interfaces and Types
Object.defineProperty(exports, "__esModule", { value: true });
// A person with out Spouse
const Amirhossein = {
    name: "Amirhossein",
    age: 24,
    isMale: true,
    friends: ["Sina", "Kasra"],
    sayHi(message) {
        console.log(message);
    },
    canTalk: false,
};
// A person with Spouse
const Beyonce = {
    name: "Beyonce",
    age: 44,
    isMale: false,
    friends: ["Rihanna", "Adele", "Shakira"],
    spouse: "Jay Z",
    sayHi(message) {
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
//# sourceMappingURL=003-interfaces.js.map