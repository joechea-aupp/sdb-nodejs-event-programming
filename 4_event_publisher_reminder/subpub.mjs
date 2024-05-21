import { EventEmitter } from "events";
const emitter = new EventEmitter();

export class Publisher {
  constructor() {
    this.emitter = emitter;
  }

  publishReminder(eventName, message) {
    this.emitter.emit(eventName, message);
  }
}

export class Subscriber {
  constructor(reminder) {
    emitter.on(reminder, (message) => {
      console.log(message);
    });
  }
}
