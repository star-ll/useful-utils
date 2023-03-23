export class Queue{  
    #queue = []
    constructor(queue = []) {
        this.#queue = queue
     }
    
    push(...args) {
         return this.#queue.push(...args)
    }
    
    shift() {
        return this.#queue.shift()
    }
    top() {
        return this.#queue[0]
    }
    size() {
        return this.#queue.length
    }
    isEmpty() {
        return this.#queue.length === 0
    }
} 