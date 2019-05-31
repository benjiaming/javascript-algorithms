import Queue from './Queue';

describe('Queue', () => {
    it('should implement a queue', () => {
        const q = new Queue();
        expect(q.size).toEqual(0);
        expect(q.enqueue(1)).toEqual(1);
        expect(q.size).toEqual(1);
        expect(q.dequeue()).toEqual(1);
        expect(q.size).toEqual(0);
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);
        expect(q.traverse()).toEqual([1,2,3]);
        expect(q.size).toEqual(3);
    })
})