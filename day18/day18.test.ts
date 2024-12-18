import { readFileSync } from 'fs';
import { day18_1, day18_2 } from './day18';

const inputFile = (fileName: string) =>
    readFileSync(`day18/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 18: RAM Run', () => {
    test('Part 1, example 1', () => {
        expect(day18_1(inputFile('sample.txt'), 7, 12)).toBe(22);
    });

    test('Part 1, puzzle input', () => {
        expect(day18_1(inputFile('input.txt'), 71, 1024)).toBe(270);
    });

    test('Part 2, example 1', () => {
        expect(day18_2(inputFile('sample.txt'), 7, 12)).toBe('6,1');
    });

    test('Part 2, puzzle input', () => {
        expect(day18_2(inputFile('input.txt'), 71, 1024)).toBe('51,40');
    });
});
