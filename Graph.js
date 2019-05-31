class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList.vertex) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v => this.removeEdge(vertex, v));
        delete this.adjacencyList[vertex];
    }
    DFSRecur(node) {
        const result = [];
        const visited = new Set();
        const traverse = (vertex) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);
            this.adjacencyList[vertex].forEach(v => {
                if (!visited.has(v)) {
                    traverse(v);
                }
            });
        }
        traverse(node);
        return result;
    }   
    DFSIter(vertex) {
        const result = [];
        const todo = [vertex];
        const visited = new Set();
        while (todo.length) {
            const current = todo.pop();
            visited.add(current);
            result.push(current);
            this.adjacencyList[current].forEach(v => {
                if (!visited.has(v)) {
                    visited.add(v);
                    todo.push(v);
                }
            }); 
        }
        return result;
    }
    BFSIter(vertex) {
        const result = [];
        const queue = [vertex];
        const visited = new Set();
        while (queue.length) {
            const current = queue.shift();
            visited.add(current);
            result.push(current);
            this.adjacencyList[current].forEach(v => {
                if (!visited.has(v)) {
                    visited.add(v);
                    queue.push(v);
                }
            }); 
        }
        return result;
    }
}
let g = new Graph;
g.addVertex('a');
g.addVertex('b');
g.addVertex('c');
g.addVertex('d');
g.addVertex('e');
g.addVertex('f');

g.addEdge('a', 'b');
g.addEdge('a', 'c');
g.addEdge('b', 'd');
g.addEdge('c', 'e');
g.addEdge('d', 'e');
g.addEdge('e', 'f');
g.addEdge('b', 'e');
g.DFSRecur('a');
g.DFSIter('a');
g.BFSIter('a');

export default Graph;
