import Graph from './Graph';

describe('Graph', () => {
    it('should implement an undirected graph', () => {
        const g = new Graph;
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
        expect(g.DFSIter('a')).toEqual(["a", "c", "e", "f", "d", "b"]);
        expect(g.DFSRecur('a')).toEqual(["a", "b", "d", "e", "c", "f"]);
        expect(g.BFSIter('a')).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
});