const tls = require("tls");

const connected = stream => {
  if (stream) {
    stream.write("GET/HTTP/1.0\n\r Host:encrypted.google.com:443\n\r\n\r");
  } else {
    console.log("Connection failed");
  }
};

var dummy = this;

dummy.socket = tls.connect(
  443,
  "encrypted.google.com",
  () => {
    dummy.connected = true;
    if (dummy.socket.authorized) {
      dummy.socket.setEncoding("utf-8");
      connected(dummy.socket);
    } else {
      console.log(dummy.socket.authorizationError);
      connected(null);
    }
  }
);

dummy.socket.addListener("data", data => {
  console.log(data);
});

dummy.socket.addListener("error", error => {
  if (!dummy.connected) {
    connected(null);
  }
  console.log("socket failed to connect");
  console.log(error);
});

dummy.socket.addListener("close", () => {
  console.log("socket closed");
});
