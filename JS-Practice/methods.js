let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);  
console.log(evenNumbers);  // [2, 4]

let numbers1= [1, 2, 3, 4];
let sum = numbers1.reduce((acc, num) => acc + num, 0);  
console.log(sum);  // 10

let usernames = ['user1', 'user2'];
let testUsers = usernames.map(u => ({ username: u, password: 'Test@123' }));
console.log(testUsers);

let results = ['pass', 'fail', 'pass'];
let passCount = results.reduce((acc, r) => r === 'pass' ? acc + 1 : acc, 0);
console.log(passCount);  // 2

let numbers2 = [5, 12, 8, 130, 44];
let found = numbers2.find(num => num > 10);
console.log(found);  // Output: 12