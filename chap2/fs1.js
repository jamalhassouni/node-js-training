const fs = require("fs");

// fs.open("input.txt", "r+", (err, fd) => {
//   if (err) {
//     console.error(err);
//   }
//   console.log("file opened");
// });

console.log("file openning");
fs.stat("input.txt", "r+", (err, stats) => {
  if (err) {
    console.error(err);
  }
  console.log(stats);
  console.log("file success");
  console.log(stats.isBlockDevice());
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isSocket());
  console.log(stats.isCharacterDevice());
  console.log(stats.isFIFO());
});
