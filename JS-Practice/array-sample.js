let colors = ["red", "green", "blue"];
let colorscolor = ["red", "green", 12];
console.log(colors[0]);  // Output: red
console.log(colors.length);  // Output: 3
console.log(typeof colors);  // Output: object
console.log(colorscolor);  // Output: object

// traditional
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// modern loop
for (let i of colors) {
    console.log(i);
}