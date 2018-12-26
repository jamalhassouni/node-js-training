const fs = require("fs");

let data = "";
let rs = fs.createReadStream("input1.txt");
let ws = fs.createWriteStream("output1.txt");
rs.pipe(ws);
console.log("app finished");
