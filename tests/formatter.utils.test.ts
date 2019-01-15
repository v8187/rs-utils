import { toTitleCase, xToNum, padString } from '../src/formatter.utils';

const mockText = 'BACHAN singh bEDI pUnE walA';
const expectedText = 'Bachan Singh Bedi Pune Wala';

const mockX = 'xxxxx';

describe('[Formatter]', () => {

    describe('toTitleCase(value)', () => {

        test('Converts First char of each word to uppercase', () => {
            expect(toTitleCase(mockText)).toBe(expectedText);
        });
    });

    describe('xToNum(value)', () => {

        test('Converts each "x" in value to random number', () => {
            expect(xToNum(mockX)).toMatch(/^\d{5}$/);
        });
    });

    describe('padString(value, position, padChar, len)', () => {

        test('Pad given value with 3 "0"s from Left', () => {
            expect(padString(523, 'LEFT', '0', 6)).toEqual('000523');
        });

        test('Pad given value with 5 "9"s from Right', () => {
            expect(padString('BLOB', 'RIGHT', '9', 9)).toEqual('BLOB99999');
        });
    });
});