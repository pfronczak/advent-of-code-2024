import { readFileSync } from 'fs';
import { day3_1, day3_2 } from './day3';

const inputFile = (fileName: string) =>
    readFileSync(`day03/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 3: Mull It Over', () => {
    test('Part 1, example 1', () => {
        expect(day3_1(inputFile('sample.txt'))).toBe(161);
    });

    test('Part 1, puzzle input', () => {
        expect(day3_1(inputFile('input.txt'))).toBe(185797128);
    });

    test('Part 2, example 1', () => {
        expect(day3_2(inputFile('sample2.txt'))).toBe(48);
    });

    test('Part 2, puzzle input', () => {
        expect(day3_2(inputFile('input.txt'))).toBe(89798695);
    });
});
