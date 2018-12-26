// Asynchronouns
const fs = require("fs");

fs.readFile("input.txt", (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Async data read ${data.toString()}`);
});
//synchronouns
let data = fs.readFileSync("input.txt");
console.log(`sync read ${data.toString()}`);
console.log("app ended");
