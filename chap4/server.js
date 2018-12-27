const express = require("express");
const http = require("http");
let app = express();
let server = http.createServer(app).listen(3000);
const io = require("socket.io")(server);

app.use(express.static("./public"));

io.on("connection", socket => {
  socket.on("chat", message => {
    socket.broadcast.emit("message", message);
  });
  socket.emit("message", "Chat");
});

console.log("Open url - http://localhost:3000");
