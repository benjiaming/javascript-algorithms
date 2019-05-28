class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let val = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return val;
    }
    shift() {
        if (!this.head) return undefined;
        let val = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let next = this.head.next;
            next.prev = null;
            this.head = next;
        }
        this.length--;
        return val;
    }
    unshift(val) {
        if (!this.head) return this.push(val);
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index > this.length || !this.head) return undefined;
        let current = this.head; 
        let goNext = true;
        let i = 0;
        if (index > this.length / 2) {
            goNext = false;
            i = this.length-1;
            current = this.tail;
        }
        while (current) {
            if (i === index) return current;
            if (goNext) {    
                current = current.next;
                i++;
            } else {
                current = current.prev; 
                i--;
            }
        }
        return undefined;
    }
    set(index, val) {
        let node = this.get(index);
        if (!node) return false;
        node.val = val;
        return true;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);
        let prev = this.get(index-1);
        let newNode = new Node(val);
        newNode.next = prev.next;
        prev.next = newNode;
        newNode.prev = prev;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        let prev = this.get(index-1);
        let victim = prev.next;
        prev.next = victim.next;
        victim.next.prev = prev;
        victim.next = null;
        victim.prev = null;
        this.length--;
        return victim.val;
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
        return this;
    }
}

// let dll = new DoublyLinkedList();
// dll.push(1);
// dll.push(2);
// dll.traverse();

export default DoublyLinkedList;