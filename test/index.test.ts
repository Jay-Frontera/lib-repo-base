import { sum } from '../src';

test('Sum of 1 + 2 should be 3',
    () => {
        expect(sum(1, 2)).toBe(3);
    }
);