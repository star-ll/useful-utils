export class LinkListNode {
  constructor(value, next, prev) {
    this.val = value;
    this.next = next || null;
    prev && (this.prev = prev);
  }
}

export class LinkList {
    #rawArray
    constructor() {
        this.#rawArray = []
    }

    add(val) {
        const node = new LinkListNode(val)
        this.#rawArray.push(node)
        return node
    }

    addFirst(val) {
        const node = new LinkListNode(val)
        this.#rawArray.unshift(node)
        return node
    }

    removeLast() {
        if (this.isEmpty()) {
            return
        }

        return this.#rawArray.pop()
    }

    removeFirst() {
        if (this.isEmpty()) {
            return
        }

        return this.#rawArray.shift()
    }

    size() {
        return this.#rawArray.length
    }

    isEmpty() {
        return this.#rawArray.length === 0
    }

    getFirst() {
        return this.#rawArray[0] || null
    }

    getLast() {
        
        return this.#rawArray[this.#rawArray.length-1] || null
    }

    toArray() {
        return this.#rawArray
    }
 }
