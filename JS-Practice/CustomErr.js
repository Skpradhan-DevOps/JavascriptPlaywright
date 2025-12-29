class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateUser(user) {
  if (!user.name) {
    throw new ValidationError("Name is required");
  }
  if (user.name.length < 3) {
    throw new ValidationError("Name must be at least 3 characters long");
  }
  return true;
} 
//validateUser({}); // Throws ValidationError: Name is required
//validateUser({ name: "Al" }); // Throws ValidationError: Name must be at least 3 characters long
console.log(validateUser({ name: "Alice" })); // true  