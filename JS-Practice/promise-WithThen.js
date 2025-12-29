function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 1000);
    });
}

function showName() {
    fetchName().then(name => {
        console.log("Name is:", name);
    });
}


showName();
console.log("This runs before name is fetched.");