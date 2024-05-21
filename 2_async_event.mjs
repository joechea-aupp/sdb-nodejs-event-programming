import { EventEmitter } from "events";

const myEventEmitter = new EventEmitter();

function notifyConnection(ip) {
  console.log(ip + " connected");
}

async function process(ip) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Processing done for " + ip);
}

myEventEmitter.on("connection", notifyConnection);
myEventEmitter.on("connection", process);

myEventEmitter.emit("connection", "172.16.54.54");
myEventEmitter.emit("connection", "192.168.0.2");
