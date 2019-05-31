import BST from './BST';

describe('BST', () => {
    it('should implement BST', () => {
        const bst = new BST();
        bst.insert(5);
        bst.insert(3);
        bst.insert(10);
        expect(bst.root.right.val).toEqual(10);
        expect(bst.root.left.val).toEqual(3);

        expect(bst.find(10).val).toEqual(10);
        expect(bst.find(5).val).toEqual(5);
        expect(bst.find(3).val).toEqual(3);
    });

    it('should support BSF', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(6);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(20);
        expect(bst.BFS()).toEqual([10,6,15,3,8,20]);
    });

    it('should support DFS', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(6);
        bst.insert(15);
        bst.insert(3);
        bst.insert(8);
        bst.insert(20);
        expect(bst.DFSPre()).toEqual([10,6,3,8,15,20]);
        expect(bst.DFSPost()).toEqual([3,8,6,20,15,10]);
        expect(bst.DFSInOrder()).toEqual([3,6,8,10,15,20]);
    } )
    it('should find the most distant leaf and return the path length', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(6);
        bst.insert(15);
        bst.insert(3);
        bst.insert(2);
        bst.insert(1);
        bst.insert(8);
        bst.insert(20);
        bst.insert(22);
        expect(bst.DFSPre()).toEqual([10,6,3,2,1,8,15,20,22]);
        expect(bst.DFSInOrder()).toEqual([1,2,3,6,8,10,15,20,22]);
        expect(bst.DFSMaxPath()).toEqual(4);
    } )
});