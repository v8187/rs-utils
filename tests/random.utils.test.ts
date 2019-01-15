import { randomItem, randomNum } from '../src/random.utils';

const mockList = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

describe('[Random]', () => {
    describe('randomItem(list)', () => {
        test('Returns random item from given list', () => {
            expect(mockList.indexOf(randomItem(mockList))).toBeGreaterThanOrEqual(0);
        });

        test('Returns undefined from empty list', () => {
            expect(randomItem([])).toBeUndefined();
        });
    });

    describe('randomNum(min, max)', () => {
        test('Returns random number between given numbers', () => {
            const randNum = randomNum(5, 20);
            expect(randNum >= 5 && randNum <= 20).toBeTruthy();
        });
    });
});