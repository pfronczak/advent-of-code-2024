import { readFileSync } from 'fs';
import { day5_1, day5_2 } from './day5';

const inputFile = (fileName: string) =>
    readFileSync(`day05/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 5: Print Queue', () => {
    test('Part 1, example 1', () => {
        expect(day5_1(inputFile('sample.txt'))).toBe(143);
    });

    test('Part 1, puzzle input', () => {
        expect(day5_1(inputFile('input.txt'))).toBe(4662);
    });

    test('Part 2, example 1', () => {
        expect(day5_2(inputFile('sample.txt'))).toBe(123);
    });

    test('Part 2, puzzle input', () => {
        expect(day5_2(inputFile('input.txt'))).toBe(5900);
    });
});
