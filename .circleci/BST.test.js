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
    })
})