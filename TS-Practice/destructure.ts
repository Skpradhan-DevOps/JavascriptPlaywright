const numbers = [1, 2, 3];

const [a, b, c, d] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // undefined

const userss = {
  name1: 'Alice',
  age1: 30,
  location1: 'NYC'
};

const { name1, location1 } = userss;

console.log(name1);     // 'Alice'
console.log(location1); // 'NYC'

