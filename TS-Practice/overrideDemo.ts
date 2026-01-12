class BasePage {
  navigate(): void {
    console.log("Navigating to base page");
  }
}

class LoginPage2 extends BasePage {
  override navigate(): void {
    console.log("Navigating to login page");
  }
}
const page = new LoginPage2();
page.navigate();