function greet1(user: string | number): string {
  if (typeof user === "string") {
    return `Hello, ${user}!`;
  } else {
    return `You are ${user} years old.`;
  }
}

console.log(greet1("Alice")); // Hello, Alice!
console.log(greet1(30)); 