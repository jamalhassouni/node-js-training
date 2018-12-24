const net = require("net");

var server = net
  .createServer(socket => {
    socket.end("Thanks have a nice dat ! :)");
  })
  .on("error", err => {
    throw err;
  });

server.listen(() => {
  address = server.address();
  console.log(`listenning on port : ${address.port}`);
});
