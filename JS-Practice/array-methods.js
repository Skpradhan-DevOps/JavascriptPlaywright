let fruits = ["apple", "banana"];
fruits.push("orange");  
console.log(fruits);  // Output: ["apple", "banana", "orange"]

let removedFruit = fruits.pop();  
console.log(removedFruit);  // Output: "orange"
console.log(fruits);  // Output: ["apple", "banana"]

let firstFruit = fruits.shift();  
console.log(firstFruit);  // Output: "apple"
console.log(fruits);  // Output: ["banana", "orange"]

fruits.unshift("apple");  
console.log(fruits);  // Output: ["apple", "banana", "orange"]

fruits.splice(1, 1, "kiwi");  
console.log(fruits);  // Output: ["apple", "kiwi", "orange"]

let citrus = fruits.slice(1, 3);  
console.log(citrus);  // Output: ["banana", "orange"]

let moreFruits = ["orange", "kiwi"];
let allFruits = fruits.concat(moreFruits);  
console.log(allFruits);  // Output: ["apple", "banana", "orange", "kiwi"]

let index = fruits.indexOf("banana");  
console.log(index);  // Output: 1

let hasBanana = fruits.includes("banana");  
console.log(hasBanana);  // Output: true

fruits.reverse();  
console.log(fruits);  // Output: ["orange", "banana", "apple"]

fruits.sort();  
console.log(fruits);  // Output: ["apple", "banana", "orange"]

a=[50,30,20]
a.sort();
console.log(a);  // Output: [20, 30, 50]