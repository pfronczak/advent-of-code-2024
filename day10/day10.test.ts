import { readFileSync } from 'fs';
import { day10_1, day10_2 } from './day10';

const inputFile = (fileName: string) =>
    readFileSync(`day10/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 10: Hoof It', () => {
    test('Part 1, example 1', () => {
        expect(day10_1(inputFile('sample.txt'))).toBe(36);
    });

    test('Part 1, puzzle input', () => {
        expect(day10_1(inputFile('input.txt'))).toBe(717);
    });

    test('Part 2, example 1', () => {
        expect(day10_2(inputFile('sample.txt'))).toBe(81);
    });

    test('Part 2, puzzle input', () => {
        expect(day10_2(inputFile('input.txt'))).toBe(1686);
    });
});
