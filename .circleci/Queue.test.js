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

describe('Queue', () => {
    it('should implement a queue', () => {
        const q = new Queue();
        expect(q.size).toEqual(0);
        expect(q.enqueue(1)).toEqual(1);
        expect(q.size).toEqual(1);
        expect(q.dequeue()).toEqual(1);
        expect(q.size).toEqual(0);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        expect(q.traverse()).toEqual([1,2,3]);
        expect(q.size).toEqual(3);
    })
})