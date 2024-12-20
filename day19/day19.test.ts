import { readFileSync } from 'fs';
import { day19_1, day19_2 } from './day19';

const inputFile = (fileName: string) =>
    readFileSync(`day19/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 19: Linen Layout', () => {
    test('Part 1, example 1', () => {
        expect(day19_1(inputFile('sample.txt'))).toBe(6);
    });

    test('Part 1, puzzle input', () => {
        expect(day19_1(inputFile('input.txt'))).toBe(213);
    });

    test('Part 2, example 1', () => {
        expect(day19_2(inputFile('sample.txt'))).toBe(16);
    });

    test('Part 2, puzzle input', () => {
        expect(day19_2(inputFile('input.txt'))).toBe(1016700771200474);
    });
});
