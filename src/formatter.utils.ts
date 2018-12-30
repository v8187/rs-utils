import { randomNum } from './random.utils';

export const toTitleCase = (value: string): string => {
    return value.toString().toLowerCase()
        .replace(/./, value.charAt(0).toUpperCase())
        .replace(/[^a-zA-Z]([a-z])/g, char => char.toUpperCase());
};

export const xToNum = (value: string): string => {
    return value.replace(/x/g, () => `${randomNum(0, 9)}`);
};
export type PadPositions = 'LEFT' | 'RIGHT';

export const padString = (value: string | number, position: PadPositions, padChar: string, len: number): string => {
   
    value = value.toString();
    const remaininglen = len - value.length;

    // If value's length is <= of required length, return it
    if (remaininglen <= 0) {
        return value;
    }

    const padString = new Array(remaininglen + 1).join(padChar);

    if (position === 'LEFT') {
        return padString + value;
    } else if (position === 'RIGHT') {
        return value + padString;
    }
    return '';
};