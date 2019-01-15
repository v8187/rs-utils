import { isObject, isEmptyObject } from '../src/is.utils';

describe('[IS]', () => {
    describe('isObject(value)', () => {
        test('Should return false for String value', () => {
            expect(isObject('abc')).toBeFalsy();
        });

        test('Should return false for Numeric value', () => {
            expect(isObject(1025)).toBeFalsy();
        });

        test('Should return false for null', () => {
            expect(isObject(null)).toBeFalsy();
        });

        test('Should return false for undefined value', () => {
            expect(isObject(undefined)).toBeFalsy();
        });

        test('Should return false for Array value', () => {
            expect(isObject([1, 2, 5, 6])).toBeFalsy();
        });

        test('Should return false for RegExp value', () => {
            expect(isObject(/\d/)).toBeFalsy();
        });

        test('Should return false for Date value', () => {
            expect(isObject(new Date())).toBeFalsy();
        });

        test('Should return true for Object value', () => {
            expect(isObject({ a: 10 })).toBeTruthy();
        });
    });

    describe('isEmptyObject(value)', () => {
        test('Should return false for { a: 10 }', () => {
            expect(isEmptyObject({ a: 10 })).toBeFalsy();
        });

        test('Should return true for {}', () => {
            expect(isEmptyObject({})).toBeTruthy();
        });
    });
});