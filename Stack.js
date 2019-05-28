class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    traverse() {
        const result = [];
        let current = this.last;
        while (current) { 
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const prev = this.last;
            this.last = newNode;
            this.last.next = prev;
        }
        this.size++;
        return this;
    }
    pop() {
        const current = this.last;
        if (!this.last) return null;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.last = this.last.next;
        }
        this.size--;
        return current;
    }
}

const stack = new Stack();
stack.push('Ron');
stack.push('Harry');
stack.push('Hermione');

export default Stack;