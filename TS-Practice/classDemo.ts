class LoginPage {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    open(url: string): void {
        console.log(`Navigating to ${url}`);
    }
}

const login = new LoginPage("http://example.com/login");
login.open(login.url);