class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }   
        let current = this.root;
        while (current) {
            if (val === current.val) return undefined;
            if (val > current.val) {
                if (current.right) {
                    current = current.right;
                } else {
                    current.right = newNode;
                    return this;
                }
            } else {
                if (current.left) {
                    current = current.left;
                } else {
                    current.left = newNode;
                    return this;
                }
            }
        }
        return undefined;                                       
    }
    find(val) {
        let current = this.root;
        while (current) {
            if (val === current.val) return current;
            if (val > current.val) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return current;
    }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(15);
bst.insert(25);
bst.insert(20);

export default BST;