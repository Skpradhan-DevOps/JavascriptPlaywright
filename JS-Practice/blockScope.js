function exampleVar() {
  var name = "John";
  if (true) {
    var name = "Jane"; // same variable, function-scoped
    console.log(name); // Output: Jane
  }
  console.log(name); // Output: Jane
}

exampleVar();
function exampleLet() {
  let name = "John";
  if (true) {
    let name = "Jane"; // different variable, block-scoped
    console.log(name); // Output: Jane
  }
  console.log(name); // Output: John
}

exampleLet();

function exampleConst() {
  const name = "John";
  if (true) {
    // name = "Jane"; // This will throw an error because `const` variables cannot be reassigned
    console.log(name); // Output: John
  }
}

exampleConst();

