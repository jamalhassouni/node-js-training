// try {
//   const x = 2;
//   const d = x + y;
// } catch (error) {
//   console.log(error);
// }

const fs = require("fs");

function JamalCallback(err, data) {
  if (err) {
    console.error("there is an error", err);
    return;
  }
  console.log(data);
}
fs.readFile("/home/jamal/Desktop/file.txt", JamalCallback);
