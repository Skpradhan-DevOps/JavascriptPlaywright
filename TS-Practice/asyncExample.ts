function fetchUser(): Promise<string> {
  return new Promise((res) => {
    setTimeout(() => {
      res("John Doe");
    }, 2000); // 2 seconds delay
  });
}

async function getUserAndGreet() {
  console.log("Fetching user...");
  const user = await fetchUser(); // waits for fetchUser to resolve
  console.log(`Hello, ${user}!`);
}

getUserAndGreet();
// Output after 2 seconds:
// Fetching user...
// Hello, John Doe!