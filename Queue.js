class Node {
    constructor(val) {
        this.val= val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    traverse() {
        const result = [];
        let current = this.first;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    dequeue() {
        if (!this.first) return null;
        const val = this.first.val;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size--;
        return val;
    }
}

const q = new Queue();
q.enqueue('first');
q.enqueue('second');
q.enqueue('third');

export default Queue;