let emp: [string, number, string] = ["Alice", 30, "Developer"];
console.log(`Employee Name: ${emp[0]}, Age: ${emp[1]}, Role: ${emp[2]}`);

let emps: { name: string; age: number; role: string }[] = [
  { name: "Bob", age: 25, role: "Designer" },
  { name: "Charlie", age: 28, role: "Manager" },
];

emps.forEach((e) => {
  console.log(`Employee Name: ${e.name}, Age: ${e.age}, Role: ${e.role}`);
});
