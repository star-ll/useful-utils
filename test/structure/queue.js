import {  strictEqual} from "aasert"
import { Queue } from "../../lib/modules/structure/queue.js";

const queue = new Queue()

queue.push(1, 2)

queue.shift()

strictEqual(queue.top(), 2)
strictEqual(queue.shift(), 2)
strictEqual(queue.top(), 1)
strictEqual(queue.isEmpty(), false)
strictEqual(queue.size(), 1)

console.log(queue);