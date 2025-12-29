let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 28,
  isStudent: false
};
console.log(person.firstName);  // Output: Jane
console.log(typeof person);  // Output: object

let person1 = {
  firstName: "Jane",  // Key: "firstName", Value: "Jane" (String)
  lastName: "Doe",    // Key: "lastName", Value: "Doe" (String)
  age: 28,            // Key: "age", Value: 28 (Number)
  isStudent: false    // Key: "isStudent", Value: false (Boolean)
};

// Accessing object properties
console.log(person1.firstName);  // Output: Jane
console.log(person1["lastName"]);  // Output: Doe
console.log(typeof person1);  // Output: object