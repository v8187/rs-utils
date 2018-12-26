import { ALPHAS, DUMMY_TEXT_MIN_4 } from './common.utils';
import { swapNumbers } from './helpers.utils';

export const randomItem = (list: any[]): any => {
  return list[Math.floor(Math.random() * list.length)];
};

export const randomAlphabet = (): string => {
  return randomItem(ALPHAS.toLowerCase().split(''));
};

export const randomNum = (min: number = 0, max: number = 10): number => {
  if (min > max) {
    const { a, b } = swapNumbers(min, max);
    min = a;
    max = b;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomAlphaNum = (format): string => {
  return format.replace(/./g, char => {
    if (char === 'a') {
      return randomAlphabet();
    } else if (char === 'A') {
      return randomAlphabet().toUpperCase();
    } else if (char === 'x') {
      return randomNum(0, 9);
    } else {
      return char;
    }
  });
};

export const randonWords = (min: number = 1, max: number = 1): string => {
  let i = min;
  const words: string[] = [];

  if (min !== max) {
    max = randomNum(min, max);
  }

  while (i <= max) {
    words.push(randomItem(DUMMY_TEXT_MIN_4));
    i++;
  }

  return words.join(' ');
};

export const randomDate = (start, end) => {
  let startTime = start.getTime(),
    endTime = end.getTime();

  if (startTime > endTime) {
    const { a, b } = swapNumbers(startTime, endTime);
    startTime = a;
    endTime = b;
  }

  return new Date(startTime + Math.random() * (endTime - startTime));
};
// randomDate(new Date(2012, 0, 1), new Date())
