function greet(name: string) {
  console.log("Hello " + name.toUpperCase());
}

greet("null"); // Error with strict: true — null is not assignable to string
greet("world");