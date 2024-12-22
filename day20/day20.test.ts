import { readFileSync } from 'fs';
import { day20_1, day20_2 } from './day20';

const inputFile = (fileName: string) =>
    readFileSync(`day20/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 20: Race Condition', () => {
    test('Part 1, example 1', () => {
        expect(day20_1(inputFile('sample.txt'))).toBe(0);
    });

    test('Part 1, puzzle input', () => {
        expect(day20_1(inputFile('input.txt'))).toBe(1448);
    });

    test('Part 2, example 1', () => {
        expect(day20_2(inputFile('sample.txt'))).toBe(0);
    });

    test('Part 2, puzzle input', () => {
        expect(day20_2(inputFile('input.txt'))).toBe(0);
    });
});
