const types = [
    52.365, 12, NaN, 'name', new Date(), /\d+/,
    null, true, false, undefined,
    { a: 10, b: 20 }, ['red', 'blue', 'green']
];

export const isDate = value => value instanceof Date;

export const isNull = value => value === null;

export const isUndefined = value => value === undefined;

export const isTrue = value => value === true;

export const isFalse = value => value === false;

export const isString = value => typeof value === 'string';

/* 
 * If the value is of Number type?
 * It can be Integer or Float
 */
export const isPureNumber = value => typeof value === 'number';

/* 
 * If the value is numeric only?
 * Type can be String or Number
 * It can be Integer or Float
 */
export const isNumber = value => /^\d+(\.\d+)?$/.test(`${value}`);

/* 
 * If the value is Float only? i.e., consist decimal value
 * Type can be String or Number
 */
export const isFloat = value => /^\d+\.\d+$/.test(`${value}`);

/* 
 * If the value is of Number type and consist decimal value
 */
export const isPureFloat = value => typeof value === 'number' && isFloat(value);

/* 
 * If the value is Integer only? i.e., does not consist decimal value
 * Type can be String or Number
 */
export const isInteger = value => /^\d+$/.test(`${value}`);

/* 
 * If the value is of Number type and does not consist decimal value
 */
export const isPureInteger = value => typeof value === 'number' && isInteger(value);

export const isRegex = value => value instanceof RegExp;

export const isArray = value => Array.isArray(value);

export const isObject = value => {
    return value !== null
        && value !== undefined
        && !isArray(value)
        && !isRegex(value)
        && !isDate(value)
        && typeof value === 'object';
};

export const isEmptyObject = value => {
    return isObject(value) && Object.keys(value).length === 0;
};