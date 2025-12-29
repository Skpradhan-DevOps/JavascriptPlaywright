function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Srikant"), 1000);
    });
}

async function showName() {
    console.log("Fetching name... WAIT>>>>");
    const name = await fetchName(); // waits for promise to finish
    console.log("Name is:", name);
    console.log("Finished fetching name.");
}

showName();
console.log("This runs before name is fetched.");