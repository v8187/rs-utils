import { hello } from '../src/index';

describe('Sample Test', () => {
    test('basic again', () => {

        expect(hello('Vikram')).toBe('Vikram!, How are you doing today?');
    });
});