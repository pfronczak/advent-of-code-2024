import { readFileSync } from 'fs';
import { day22_1, day22_2 } from './day22';

const inputFile = (fileName: string) =>
    readFileSync(`day22/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 22: Monkey Market', () => {
    test('Part 1, example 1', () => {
        expect(day22_1(inputFile('sample.txt'))).toBe(37327623);
    });

    test('Part 1, puzzle input', () => {
        expect(day22_1(inputFile('input.txt'))).toBe(15006633487);
    });

    test('Part 2, example 1', () => {
        expect(day22_2(inputFile('sample.txt'))).toBe(0);
    });

    test('Part 2, puzzle input', () => {
        expect(day22_2(inputFile('input.txt'))).toBe(0);
    });
});
