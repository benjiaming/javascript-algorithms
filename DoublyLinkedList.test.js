import DoublyLinkedList from './DoublyLinkedList';

describe('Doubly Linked List', () => {
    it('should provide DLL', () => {
        let dll = new DoublyLinkedList();
        dll.push(1);
        expect(dll.head.val).toEqual(1);
        dll.push(2);
        expect(dll.head.next.val).toEqual(2); 
        expect(dll.length).toEqual(2);

        expect(dll.pop().val).toEqual(2);
        expect(dll.length).toEqual(1);
        expect(dll.pop().val).toEqual(1);
        expect(dll.length).toEqual(0);
        expect(dll.pop()).toBeUndefined();

        expect(dll.shift()).toBeUndefined();
        dll.push(1);
        expect(dll.shift().val).toEqual(1);
        expect(dll.length).toEqual(0);
        dll.push(1);
        dll.push(2);
        expect(dll.head.next.val).toEqual(2);
        expect(dll.tail.prev.val).toEqual(1);
        expect(dll.shift().val).toEqual(1);
        expect(dll.length).toEqual(1);
        expect(dll.head.next).toBeNull();
        expect(dll.tail.prev).toBeNull();

        dll.pop();

        dll.unshift(1);
        expect(dll.length).toEqual(1);
        expect(dll.head.next).toBeNull();
        expect(dll.tail.prev).toBeNull();
        dll.unshift(2);
        expect(dll.length).toEqual(2);
        expect(dll.head.next.val).toEqual(1);
        expect(dll.tail.prev.val).toEqual(2);

        expect(dll.get(1).val).toEqual(1);
        expect(dll.get(2)).toBeUndefined();
        dll.push(3);
        dll.push(4);
        dll.push(5);
        expect(dll.length).toEqual(5); 

        expect(dll.traverse()).toEqual([ 2, 1, 3, 4, 5 ]);
        expect(dll.get(0).val).toEqual(2);             
        expect(dll.get(1).val).toEqual(1);
        expect(dll.get(2).val).toEqual(3);
        expect(dll.get(3).val).toEqual(4);
        expect(dll.get(4).val).toEqual(5);             
        expect(dll.get(5)).toBeUndefined();

        expect(dll.set(0, 1)).toBeTruthy();
        expect(dll.head.val).toEqual(1);
        expect(dll.set(1, 2)).toBeTruthy();
        expect(dll.head.next.val).toEqual(2);
        expect(dll.set(5, 5)).toBeFalsy();

        expect(dll.insert(0, 0.5)).toBeTruthy();
        expect(dll.get(0).val).toEqual(0.5);
        expect(dll.get(0).next.val).toEqual(1);
        expect(dll.insert(1, 0.75)).toBeTruthy();
        expect(dll.get(1).val).toEqual(0.75);
        expect(dll.insert(dll.length, 100)).toBeTruthy();
        expect(dll.insert(dll.length+1)).toBeFalsy();

        expect(dll.traverse()).toEqual([0.5, 0.75, 1, 2, 3, 4, 5, 100]);
        expect(dll.length).toEqual(8);
        expect(dll.remove(1)).toEqual(0.75);
        expect(dll.length).toEqual(7);
        expect(dll.remove(0).val).toEqual(0.5);
        expect(dll.length).toEqual(6);
        expect(dll.remove(6).val).toEqual(100);
        expect(dll.length).toEqual(5);
        expect(dll.remove(6)).toBeUndefined();

        expect(dll.traverse()).toEqual([1,2,3,4,5]);
        dll.reverse();
        expect(dll.traverse()).toEqual([5,4,3,2,1]);
    });
})