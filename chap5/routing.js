const http = require("http");
const fs = require("fs");

var server = http.createServer((req, res) => {
  console.log("request was made:" + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  }
});

server.listen(3000, "localhost");
console.log("yo dawgs, now listening to port 3000");
