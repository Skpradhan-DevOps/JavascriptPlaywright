function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Logged in as Srikant"), 1000);
    });
}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard loaded"), 1000);
    });
}

function fetchVoid() {
    console.log("This function does not return a promise");
}

async function runApp() {
    const loginMessage = await loginUser();
    console.log(loginMessage);

    const dashboard = await fetchDashboard();
    console.log(dashboard);

    fetchVoid();
    console.log("Finished all steps.");
}

runApp();
console.log("App is starting...");