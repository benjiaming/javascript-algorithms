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
    BFS() {
        const visited = [];
        const q = [this.root];
        while (q.length) {
            let current = q.pop();
            visited.push(current.val);
            if (current.left) q.unshift(current.left);
            if (current.right) q.unshift(current.right);
        } 
        return visited;
    }
    DFSPre() {
        const visited = [];
        const traverse = (node) => {
            if (!node) return;
            visited.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
    DFSPost() {
        const visited = [];
        const traverse = (node) => {
            if (!node) return;
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(this.root);
        return visited;
    }
    DFSInOrder() {
        const visited = [];
        const traverse = (node) => {
            if (!node) return;
            if (node.left) traverse(node.left);
            visited.push(node.val);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }    
    DFSMaxPath() {
        const traverse = (node) => {
            if (!node) return -1;
            return 1 + Math.max(traverse(node.left), traverse(node.right));
        }
        return traverse(this.root);
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