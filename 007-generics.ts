// Generics

// Make a class that can takes anything
// We show anything for generics as T
class StorageContainer<T> {
  // A private variable that is array of T
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  //   Add item void
  addItem(item: T): void {
    this.contents.push(item);
  }

  // Get item void
  getItem(idx: number): T | undefined {
    return this.contents[idx];
  }
}

// Define your class with type String
const usernames = new StorageContainer<string>();

// Add some usernames - strings
usernames.addItem("GNU_Amir");
usernames.addItem("cna_007");

// Get items - strings or undefineds
let firstUsername: string | undefined = usernames.getItem(0);
let randomUsername: string | undefined = usernames.getItem(9);

console.log(firstUsername, randomUsername);

// Define your class with type Number
const ids = new StorageContainer<number>();

// Add some ids - numbers
ids.addItem(13579);
ids.addItem(2468);

// Get items - numbers or undefineds
let firstId: number | undefined = ids.getItem(0);
let randomId: number | undefined = ids.getItem(9);

console.log(firstId, randomId);
