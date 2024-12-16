import { readFileSync } from 'fs';
import { day14_1, day14_2 } from './day14';

const inputFile = (fileName: string) =>
    readFileSync(`day14/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 14: Restroom Redoubt', () => {
    test('Part 1, example 1', () => {
        expect(day14_1(inputFile('sample.txt'), 11, 7)).toBe(12);
    });

    test('Part 1, puzzle input', () => {
        expect(day14_1(inputFile('input.txt'), 101, 103)).toBe(225810288);
    });

    test('Part 2, puzzle input', () => {
        expect(day14_2(inputFile('input.txt'), 101, 103, 10000)).toBe(6752);
    });
});
