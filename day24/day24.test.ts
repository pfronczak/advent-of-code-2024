import { readFileSync } from 'fs';
import { day24_1, day24_2 } from './day24';

const inputFile = (fileName: string) =>
    readFileSync(`day24/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 24: Crossed Wires', () => {
    test('Part 1, example 1', () => {
        expect(day24_1(inputFile('sample.txt'))).toBe(4);
    });

    test('Part 1, example 2', () => {
        expect(day24_1(inputFile('sample2.txt'))).toBe(2024);
    });

    test('Part 1, puzzle input', () => {
        expect(day24_1(inputFile('input.txt'))).toBe(36902370467952);
    });

    test('Part 2, example 1', () => {
        day24_2(inputFile('sample.txt'), 'sample');
    });

    test('Part 2, puzzle input', () => {
        day24_2(inputFile('input.txt'), 'input');
    });
});
