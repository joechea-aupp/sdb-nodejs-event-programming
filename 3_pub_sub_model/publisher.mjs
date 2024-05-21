export class Publisher {
  constructor(emitter) {
    this.emitter = emitter;
  }

  publishMessage() {
    this.emitter.emit("greeting", "Hello World!");
  }
}
