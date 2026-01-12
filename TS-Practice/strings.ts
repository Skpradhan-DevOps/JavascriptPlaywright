let text: string = "tPlaywright";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.includes("wright"));
console.log(text.replace("wright", "test"));
console.log(text.substring(0, 4));
console.log(text.replace("t","3"))
console.log(text.replaceAll("t","3"))
let str: string = "This is it";
console.log(str.split(" "));
let strtrim: string = "   This is it   ";
console.log(strtrim.trim());


const language: string = "JavaScript,java,python";
const languages: string[] = language.split(",");
for (const i of languages) {
   if (i === "java") {
       console.log("Found Java");
       break;
   }
}
