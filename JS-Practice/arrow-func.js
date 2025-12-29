const add = (a,b) => a+b;
console.log(add(2,3)); // 5

const greet=name=>`Hello, ${name}!`;
console.log(greet("Bob")); // Hello, Bob!

const multiply=(a,b)=>{
    let result=a*b;
    results=result+" is the product.";
    return results;
}
console.log(multiply(4,5)); // 20 is the product.