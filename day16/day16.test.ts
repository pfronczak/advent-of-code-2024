import { readFileSync } from 'fs';
import { day16_1, day16_2 } from './day16';

const inputFile = (fileName: string) =>
    readFileSync(`day16/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 16: Reindeer Maze', () => {
    test('Part 1, example 1', () => {
        expect(day16_1(inputFile('sample.txt'))).toBe(7036);
    });

    test('Part 1, example 2', () => {
        expect(day16_1(inputFile('sample2.txt'))).toBe(11048);
    });

    test('Part 1, puzzle input', () => {
        expect(day16_1(inputFile('input.txt'))).toBe(90440);
    });

    test('Part 2, example 1', () => {
        expect(day16_2(inputFile('sample.txt'))).toBe(0);
    });

    test('Part 2, puzzle input', () => {
        expect(day16_2(inputFile('input.txt'))).toBe(0);
    });
});
