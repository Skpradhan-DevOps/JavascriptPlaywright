let user;
//console.log(user.name); // Runtime Error: Cannot read property 'name' of undefined
try {
    console.log(user.name);
} catch (error) {
    console.error("Caught an error:", error.message);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
try {
    console.log(divide(10, 0));
} catch (error) {
    console.error("Error during division:", error.message);
}