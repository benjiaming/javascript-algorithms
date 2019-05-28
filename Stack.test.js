import Stack from './Stack';

describe('Stack', () => {
    it('should implement Stack', () => {
        const stack = new Stack();
        expect(stack.traverse()).toEqual([]);        
        
        expect(stack.size).toEqual(0);
        expect(stack.first).toBeNull();
        expect(stack.last).toBeNull();
        stack.push(1);
        expect(stack.first.val).toEqual(1);
        expect(stack.last.val).toEqual(1);
        stack.push(2);
        expect(stack.last.next.val).toEqual(1);
        expect(stack.last.val).toEqual(2);
        stack.push(3);
        expect(stack.last.next.next.val).toEqual(1);
        expect(stack.last.val).toEqual(3);
        expect(stack.size).toEqual(3);

        expect(stack.traverse()).toEqual([3,2,1]);

        expect(stack.pop().val).toEqual(3);
        expect(stack.last.val).toEqual(2);        
        expect(stack.pop().val).toEqual(2);
        expect(stack.last.val).toEqual(1);        
        expect(stack.pop().val).toEqual(1);
        expect(stack.last).toBeNull();

        expect(stack.pop()).toBeNull();
        expect(stack.traverse()).toEqual([]);
    })
}) 