import { readFileSync } from 'fs';
import { day9_1, day9_2 } from './day9';

const inputFile = (fileName: string) =>
    readFileSync(`day09/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 9: Disk Fragmenter', () => {
    test('Part 1, example 1', () => {
        expect(day9_1(inputFile('sample.txt'))).toBe(1928);
    });

    test('Part 1, puzzle input', () => {
        expect(day9_1(inputFile('input.txt'))).toBe(6341711060162);
    });

    test('Part 2, example 1', () => {
        expect(day9_2(inputFile('sample.txt'))).toBe(2858);
    });

    test('Part 2, puzzle input', () => {
        expect(day9_2(inputFile('input.txt'))).toBe(6377400869326);
    });
});
