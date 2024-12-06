import { readFileSync } from 'fs';
import { day6_1, day6_2 } from './day6';

const inputFile = (fileName: string) =>
    readFileSync(`day06/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 6: Guard Gallivant', () => {
    test('Part 1, example 1', () => {
        expect(day6_1(inputFile('sample.txt'))).toBe(41);
    });

    test('Part 1, puzzle input', () => {
        expect(day6_1(inputFile('input.txt'))).toBe(5153);
    });

    test('Part 2, example 1', () => {
        expect(day6_2(inputFile('sample.txt'))).toBe(6);
    });

    test('Part 2, puzzle input', () => {
        expect(day6_2(inputFile('input.txt'))).toBe(1711);
    });
});
