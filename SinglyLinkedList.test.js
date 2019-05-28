import { SinglyLinkedList } from './SinglyLinkedList';

describe('Single Linked List', () => {
    it('should provide SLL', () => {
        var list = new SinglyLinkedList();
        list.push('HELLO');
        list.push('middle')
        list.push('GOODBYE');

        expect(list.head.val).toEqual('HELLO');
        expect(list.head.next.val).toEqual('middle');
        expect(list.head.next.next.val).toEqual('GOODBYE');
        expect(list.tail.val).toEqual('GOODBYE');    
        expect(list.length).toEqual(3);

        expect(list.pop()).toEqual('GOODBYE');
        expect(list.length).toEqual(2);
        
        var list = new SinglyLinkedList();
        expect(list.length).toEqual(0);
        expect(list.pop()).toEqual(undefined);
        expect(list.length).toEqual(0);

        list.push('hi');
        expect(list.length).toEqual(1);
        expect(list.head.val).toEqual('hi');
        expect(list.pop()).toEqual('hi');
        expect(list.length).toEqual(0);

        list.push('1');
        list.push('2');
        expect(list.length).toEqual(2);
        expect(list.head.val).toEqual('1');
        list.shift();
        expect(list.length).toEqual(1);
        expect(list.head.val).toEqual('2');
        list.shift();
        expect(list.length).toEqual(0);
        expect(list.head).toBe(null);

        list.unshift('1');
        expect(list.length).toEqual(1);
        expect(list.head.val).toEqual('1');
        expect(list.tail.val).toEqual('1');
        list.unshift('2');
        expect(list.length).toEqual(2);
        expect(list.head.val).toEqual('2');
        expect(list.tail.val).toEqual('1');

        expect(list.get(0).val).toEqual('2');
        expect(list.get(1).val).toEqual('1');
        expect(list.get(2)).toBeFalsy();

        list.set(0, '1');
        list.set(1, '2');
        expect(list.get(0).val).toEqual('1');
        expect(list.get(1).val).toEqual('2');
        expect(list.set(2)).toBeFalsy();

        expect(list.insert(0, '0')).toBeTruthy();
        expect(list.length).toEqual(3);
        expect(list.insert(1, '1.5')).toBeTruthy();
        expect(list.get(1).val).toEqual('1.5');
        expect(list.length).toEqual(4);
        expect(list.insert(2, '2.5')).toBeTruthy();
        expect(list.length).toEqual(5);
        expect(list.insert(6, '?')).toBeFalsy();

        // 0, 1.5, 2.5, 1, 2
        expect(list.remove(0)).toEqual('0');
        expect(list.length).toEqual(4);
        // 1.5, 2.5, 1, 2
        expect(list.remove(2)).toEqual('1');
        expect(list.length).toEqual(3);
        // 1.5, 2.5, 2
        expect(list.remove(2)).toEqual('2');
        expect(list.length).toEqual(2);
        // 1.5, 2.5
        expect(list.remove(1)).toEqual('2.5');
        expect(list.length).toEqual(1);
        // 1.5
        expect(list.remove(0)).toEqual('1.5');
        expect(list.length).toEqual(0);

        expect(list.remove(0)).toBeFalsy();;

        list.push('1');
        list.push('2');
        expect(list.traverse()).toEqual(['1', '2']);
        list.reverse();
        expect(list.traverse()).toEqual(['2', '1']);
        list.push('3');
        list.push('4');
        // 2 1 3 4 
        list.reverse();
        expect(list.traverse()).toEqual(['4', '3', '1', '2']);
    });        
});
