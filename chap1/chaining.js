// const fs = require("fs");
// const zlib = require("zlib");

// fs.createReadStream("input.txt")
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream("input.txt.gz"));

// console.log("app zip finished");

const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input3.txt"));

console.log("app unzip finished");
