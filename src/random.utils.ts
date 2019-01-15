import { swapNumbers } from './helpers.utils';

export const randomItem = (list: any[]): any => {
    return list[Math.floor(Math.random() * list.length)];
};

export const randomNum = (min: number = 0, max: number = 10): number => {

    if (min > max) {
        const { a, b } = swapNumbers(min, max);
        min = a;
        max = b;
    }
    return Math.floor(Math.random() * (max - min + 1) + min);
};