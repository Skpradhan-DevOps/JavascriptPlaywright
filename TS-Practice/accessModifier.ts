class UserProfile {
  public name: string;
  private password: string;
  protected email: string;

  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }

  public showProfile(): void {
    console.log(`Name: ${this.name}`);
  }
  private showPassword(): void {
    console.log(`Password: ${this.password}`);
  }

   showEmail(): void {
    console.log(`Email: ${this.email}`);
  }
}


const user = new UserProfile("JohnDoe", "securePassword", "john@example.com");
user.showProfile();
// user.showPassword(); // Error: 'showPassword' is private
user.showEmail();    // Error: 'showEmail' is protected
