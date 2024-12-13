import { readFileSync } from 'fs';
import { day13_1, day13_2 } from './day13';

const inputFile = (fileName: string) =>
    readFileSync(`day13/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 13: Claw Contraption', () => {
    test('Part 1, example 1', () => {
        expect(day13_1(inputFile('sample.txt'))).toBe(480);
    });

    test('Part 1, puzzle input', () => {
        expect(day13_1(inputFile('input.txt'))).toBe(37680);
    });

    test('Part 2, example 1', () => {
        expect(day13_2(inputFile('sample.txt'))).toBe(0);
    });

    test('Part 2, puzzle input', () => {
        expect(day13_2(inputFile('input.txt'))).toBe(0);
    });
});
