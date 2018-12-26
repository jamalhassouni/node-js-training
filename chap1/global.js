var http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(" Jamal Hassouni \n");
  })
  .listen(8080);

console.log("Server runnning at http://localhost:8080");
