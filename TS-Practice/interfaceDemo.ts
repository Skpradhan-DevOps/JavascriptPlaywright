interface IEmployee {
  name: string;
  age: number;
  role: string;
  greet(): string;
}
class Staff implements IEmployee {
  constructor(public name: string, public age: number, public role: string) {}
  
  greet(): string {
    return `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.role}.`;
  }
}
const staffMember = new Staff("Alice", 30, "Developer");
console.log(staffMember.greet());

interface User {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}
function greet(user: User): void {
  console.log(`Hello ${user.name}, age ${user.age}`);
}

const tester: User = { name: 'Sidharth', age: 34 };
greet(tester);
const admin: User = { name: 'AdminUser', age: 40, isAdmin: true };
greet(admin);

