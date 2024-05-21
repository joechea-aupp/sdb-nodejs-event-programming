import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter();

// callback function to be executed when the event is emitted
function notifyConnection(ip) {
  console.log(ip + " connected");
}

// specify the event and the callback function
myEventEmitter.on("connection", notifyConnection);

// emit the event
myEventEmitter.emit("connection", "127.0.0.1");
