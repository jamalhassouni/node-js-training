const fs = require("fs");

let data = "some text here";

let ws = fs.createWriteStream("output.txt");

ws.write(data, "UTF8");
ws.end();
ws.on("finish", () => {
  console.log("done successfully! :)");
});

ws.on("error", err => {
  console.log(err.stack);
});

console.log("app finished");
