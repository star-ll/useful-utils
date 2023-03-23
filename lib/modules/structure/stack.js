export class Stack  {
    #stack
    constructor(stack = []) {
        this.#stack = stack
    }
    push(...val) {
        return this.#stack.push(...val)
    }
    pop() {
        return this.#stack.pop()
    }
    top() {
        return this.#stack[this.#stack.length-1]
    }
    size() {
        return this.#stack.length
    }
    isEmpty() {
       return this.#stack.length === 0
    }

    get __raw__() {
        return this.#stack
    }
}