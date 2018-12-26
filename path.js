const path = require("path");

console.log(path.normalize("/etc/home/jamal"));
console.log(path.join("/etc/home/jamal", "/another/path"));
console.log(path.resolve("path.js"));
console.log(path.extname("path.js"));
