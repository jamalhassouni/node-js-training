const event = require("events");

let eventEmitter = new event.EventEmitter();

let connectHandle = (conneted = () => {
  console.log("event connected successfully");
  eventEmitter.emit("datarecevied");
});
eventEmitter.on("connection", connectHandle);

eventEmitter.on("datarecevied", () => {
  console.log("data recieved successfully");
});

eventEmitter.emit("connection");
console.log("App finished");
