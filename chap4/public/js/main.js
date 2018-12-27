var socket = io.connect("http://localhost:3000");

socket.on("disconnect", () => {
  setTitle("Disconnected");
});

socket.on("connect", () => {
  setTitle("Connected");
});

socket.on("message", message => {
  printMessage(message);
});

document.forms[0].onsubmit = () => {
  let input = document.getElementById("message");
  printMessage(input.value);
  socket.emit("chat", input.value);
  input.value = "";
};

const setTitle = title => {
  document.querySelector("h1").innerHTML = title;
};
const printMessage = message => {
  let p = document.createElement("p");
  p.innerHTML = message;
  document.querySelector("div.messages").appendChild(p);
};
