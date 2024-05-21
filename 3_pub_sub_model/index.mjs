import { Publisher } from "./publisher.mjs";
import { Subscriber } from "./subscriber.mjs";
import { EventEmitter } from "events";

const emitter = new EventEmitter();

const publisher = new Publisher(emitter);
const subscriber = new Subscriber(emitter);

subscriber.subscribeToEvent();
publisher.publishMessage();
