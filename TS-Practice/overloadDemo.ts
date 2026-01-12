function greet2(name: string): string;
function greet2(age: number): string;

function greet2(value: string | number): string {
  if (typeof value === "string") return `Hi, ${value}`;
  return `You are ${value} years old`;
}
console.log(greet2("Alice"));
console.log(greet2(30));
