import {strictEqual} from "assert"
import { Stack } from "../../lib/modules/structure/stack.js"

const stack = new Stack()

stack.push(1)
stack.push(2)

strictEqual(stack.pop(), 2)
strictEqual(stack.top(), 1)

stack.push(3)
strictEqual(stack.top(), 3)

strictEqual(stack.size(), 2)
strictEqual(stack.isEmpty(), false)

console.log(stack);

console.log(stack.__raw__);

