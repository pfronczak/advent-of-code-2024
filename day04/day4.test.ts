import { readFileSync } from 'fs';
import { day4_1, day4_2 } from './day4';

const inputFile = (fileName: string) =>
    readFileSync(`day04/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('XXXXX', () => {
    test('Part 1, example 1', () => {
        expect(day4_1(inputFile('sample.txt'))).toBe(18);
    });

    test('Part 1, puzzle input', () => {
        expect(day4_1(inputFile('input.txt'))).toBe(2685);
    });

    test('Part 2, example 1', () => {
        expect(day4_2(inputFile('sample.txt'))).toBe(9);
    });

    test('Part 2, puzzle input', () => {
        expect(day4_2(inputFile('input.txt'))).toBe(2048);
    });
});
