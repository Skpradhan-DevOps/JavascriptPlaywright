let creds = new Map<string, string>();
creds.set("username", "srik");
creds.set("password", "123");
console.log(`Username: ${creds.get("username")}`);
console.log(`Password: ${creds.get("password")}`);

let credss = new Map<string, any>();
credss.set("StudentName", "sid");
credss.set("rollNumber", "123");
console.log(credss.get("StudentName"));
console.log(credss);
console.log(credss.delete("StudentName"));
console.log(credss);
console.log(credss.has("rollNumber"));
credss.set("StudentName", "sid");
for (let [i, j] of credss.entries()) {
   if (i === "StudentName") {
      console.log("Key Is Present");
   }
 console.log(`${i}--> ${j}`);
}


for (let i of credss.keys()) {
 console.log(`${i}`);
}


for (let j of credss.values()) {
 console.log(`${j}`);
}
