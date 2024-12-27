import { readFileSync } from 'fs';
import { day15_1, day15_2 } from './day15';

const inputFile = (fileName: string) =>
    readFileSync(`day15/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 15: Warehouse Woes', () => {
    test('Part 1, example 1', () => {
        expect(day15_1(inputFile('sample.txt'))).toBe(2028);
    });

    test('Part 1, example 2', () => {
        expect(day15_1(inputFile('sample2.txt'))).toBe(10092);
    });

    test('Part 1, puzzle input', () => {
        expect(day15_1(inputFile('input.txt'))).toBe(1517819);
    });

    test('Part 2, example 2', () => {
        expect(day15_2(inputFile('sample2.txt'))).toBe(9021);
    });

    test('Part 2, puzzle input', () => {
        expect(day15_2(inputFile('input.txt'))).toBe(1538862);
    });
});
