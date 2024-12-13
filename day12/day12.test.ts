import { readFileSync } from 'fs';
import { day12_1, day12_2 } from './day12';

const inputFile = (fileName: string) =>
    readFileSync(`day12/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 12: Garden Groups', () => {
    test('Part 1, example 1', () => {
        expect(day12_1(inputFile('sample.txt'))).toBe(140);
    });

    test('Part 1, example 2', () => {
        expect(day12_1(inputFile('sample2.txt'))).toBe(772);
    });

    test('Part 1, example 3', () => {
        expect(day12_1(inputFile('sample3.txt'))).toBe(1930);
    });

    test('Part 1, puzzle input', () => {
        expect(day12_1(inputFile('input.txt'))).toBe(1396298);
    });

    test('Part 2, example 1', () => {
        expect(day12_2(inputFile('sample.txt'))).toBe(80);
    });

    test('Part 2, example 2', () => {
        expect(day12_2(inputFile('sample2.txt'))).toBe(436);
    });

    test('Part 2, example 3', () => {
        expect(day12_2(inputFile('sample3.txt'))).toBe(1206);
    });

    test('Part 2, example 4', () => {
        expect(day12_2(inputFile('sample4.txt'))).toBe(236);
    });

    test('Part 2, example 5', () => {
        expect(day12_2(inputFile('sample5.txt'))).toBe(368);
    });

    test('Part 2, puzzle input', () => {
        expect(day12_2(inputFile('input.txt'))).toBe(0);
    });
});
