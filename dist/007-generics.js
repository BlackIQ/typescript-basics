"use strict";
// Generics
Object.defineProperty(exports, "__esModule", { value: true });
// Make a class that can takes anything
// We show anything for generics as T
class StorageContainer {
    // A private variable that is array of T
    contents;
    constructor() {
        this.contents = [];
    }
    //   Add item void
    addItem(item) {
        this.contents.push(item);
    }
    // Get item void
    getItem(idx) {
        return this.contents[idx];
    }
}
// Define your class with type String
const usernames = new StorageContainer();
// Add some usernames - strings
usernames.addItem("GNU_Amir");
usernames.addItem("cna_007");
// Get items - strings or undefineds
let firstUsername = usernames.getItem(0);
let randomUsername = usernames.getItem(9);
console.log(firstUsername, randomUsername);
// Define your class with type Number
const ids = new StorageContainer();
// Add some ids - numbers
ids.addItem(13579);
ids.addItem(2468);
// Get items - numbers or undefineds
let firstId = ids.getItem(0);
let randomId = ids.getItem(9);
console.log(firstId, randomId);
//# sourceMappingURL=007-generics.js.map