import { deepCopy, swapNumbers, deepMergeObject, mergeObject } from '../src/helpers.utils';

describe('[Helper]', () => {
    describe('deepCopy(value)', () => {
        test('Copy given Object/Array', () => {
            const mockObject = { a: 10, b: 15 };
            const copied = deepCopy(mockObject);
            copied.a = 13;
            expect(mockObject.a).toBe(10);
        });
    });

    describe('deepMergeObject(target, ...sources)', () => {
        test('Merge list of objects into first one', () => {
            const
                target = { a: 10, b: { c: 13, d: 54, e: 'foo' } },
                source1 = { b: { e: 90, f: 'bla' } },
                source2 = { a: { g: 'test', p: 10 }, b: { f: 'bla 2' } },
                expected = { a: { g: 'test', p: 10 }, b: { c: 13, d: 54, e: 90, f: 'bla 2' } };

            expect(deepMergeObject(target, source1, source2)).toEqual(expected);
        });
    });

    describe('mergeObject(target, source)', () => {
        test('Merge second object into first', () => {
            const
                target = { b: { e: 90, f: 'bla' } },
                source = { a: { g: 'test', p: 10 }, b: { f: 'bla 2' } },
                expected = { a: { g: 'test', p: 10 }, b: { e: 90, f: 'bla 2' } };

            expect(mergeObject(target, source)).toEqual(expected);
        });
    });

    describe('swapNumbers(value)', () => {
        test('Swap the given numbers', () => {
            const expected = { a: 15, b: 10 };
            expect(swapNumbers(10, 15)).toEqual(expected);
        });
    });
});