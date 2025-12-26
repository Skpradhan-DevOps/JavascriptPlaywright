let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);  
console.log(evenNumbers);  // [2, 4]

let results = [{testcaseid: 1, status: 'pass'}, {testcaseid: 2, status: 'fail'}];
let failedTests = results.filter(r => r.status === 'fail');
console.log(failedTests);  // [{testcaseid: 2, status: 'fail'}]