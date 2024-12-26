import { readFileSync } from 'fs';
import { day25_1, day25_2 } from './day25';

const inputFile = (fileName: string) =>
    readFileSync(`day25/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 25: Code Chronicle', () => {
    test('Part 1, example 1', () => {
        expect(day25_1(inputFile('sample.txt'))).toBe(3);
    });

    test('Part 1, puzzle input', () => {
        expect(day25_1(inputFile('input.txt'))).toBe(3249);
    });

    test('Part 2, example 1', () => {
        expect(day25_2(inputFile('sample.txt'))).toBe(0);
    });

    test('Part 2, puzzle input', () => {
        expect(day25_2(inputFile('input.txt'))).toBe(0);
    });
});
