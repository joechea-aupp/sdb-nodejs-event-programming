import { Publisher, Subscriber } from "./subpub.mjs";

const publisher = new Publisher();

const subscriber_1 = new Subscriber("event1");
const subscriber_2 = new Subscriber("event2");

publisher.publishReminder("event1", "Reminder: Event 1 is about to start!");
