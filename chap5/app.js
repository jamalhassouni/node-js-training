// const stuff = require("./stuff");

// console.log(stuff.counter(["shaun", "crystal", "ryu"]));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

const http = require("http");

var server = http.createServer((req, res) => {
  console.log("request was made:" + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hey Jamal");
});

server.listen(3000, "localhost");
console.log("yo dawgs, now listening to port 3000");
