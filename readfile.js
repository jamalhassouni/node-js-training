const fs = require("fs");

let data = "";

let rs = fs.createReadStream("input.txt");

rs.setEncoding("UTF8");
rs.on("data", chunk => {
  data += chunk;
});

rs.on("end", () => {
  console.log(data);
});

rs.on("error", err => {
  console.log(err.stack);
});

console.log("app finished");
