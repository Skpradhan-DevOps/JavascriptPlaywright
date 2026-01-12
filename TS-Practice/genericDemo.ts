function identity<A>(value: A): A {
  return value;
}

console.log(identity<string>("Hello, TypeScript!"));
console.log(identity<number>(42));

function getTest1(arr: any[]) {
   console.log(arr[0]);
   return arr[0]
}
const val1 = getTest1(["tests","1","2"]);
console.log(`Value1: ${val1}`);
const val2 = getTest1([10,20,30]);
console.log(`Value2: ${val2}`);


function getTest<T>(item: T): T {
  return item;
}

console.log(getTest<string>("Generic Function Test"));
console.log(getTest<number>(100));

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const firstName = getFirstElement<string>(['Sid', 'Rahul']); // 'Sid'
const firstScore = getFirstElement<number>([99, 85, 76]); // 99

console.log(`First Name: ${firstName}`);
console.log(`First Score: ${firstScore}`);