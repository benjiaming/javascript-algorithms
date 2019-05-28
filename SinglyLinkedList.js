class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// var first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    traverse() {
        if (!this.head) return;
        const output = [];
        let current = this.head;
        while (current) {
            output.push(current.val);
            current = current.next;
        }
        return output;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let currentTail = this.head;
        let newTail = currentTail;
        while (currentTail.next)  {
            newTail = currentTail;
            currentTail = currentTail.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (!this.length) {
            this.head = null;
            this.tail = null;
        }
        return currentTail.val;
    }   
    shift() {
        if (!this.head) return undefined;
        const val = this.head.val;
        this.head = this.head.next;
        this.length--;
        if (!this.length) this.tail = null;
        return val;
    }
    unshift(val) {
        if (!this.head) return this.push(val);
        const newNode = new Node(val);
        [newNode.next, this.head] = [this.head, newNode];
        this.length++;
        return this.head;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let curIndex = 0;
        let current = this.head;
        while (current) {
            if (curIndex === index) return current;
            curIndex++;
            current = current.next;
        }
        return null;
    }
    set(index, val) {
        let current = this.get(index);
        if (!current) return false;
        current.val = val;
        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        if (index === this.length) {
            this.push(val);
            return true;
        }
        let el = this.get(index-1);
        let newEl = new Node(val);
        [el.next, newEl.next] = [newEl, el.next]
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        let prev = this.get(index-1);
        const val = prev.next.val;
        prev.next = prev.next.next;
        this.length--;
        return val;
    }
    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let prev;
        while (current) {
            let temp = current.next;
            current.next = prev;
            prev = current; 
            current = temp;             
        }
    }
}
// var list = new SinglyLinkedList();

// list.push('HELLO');
// list.push('middle')
// list.push('middle2')
// list.push('GOODBYE');
// list.pop();
// list.shift();
// list.traverse();

export { SinglyLinkedList };