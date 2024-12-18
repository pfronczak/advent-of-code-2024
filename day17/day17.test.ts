import { readFileSync } from 'fs';
import { day17_1, day17_2 } from './day17';

const inputFile = (fileName: string) =>
    readFileSync(`day17/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 17: Chronospatial Computer', () => {
    test('Part 1, example 1', () => {
        expect(day17_1(inputFile('sample.txt'))).toBe('4,6,3,5,6,3,5,2,1,0');
    });

    test('Part 1, puzzle input', () => {
        expect(day17_1(inputFile('input.txt'))).toBe('7,4,2,5,1,4,6,0,4');
    });

    test('Part 2, puzzle input', () => {
        expect(day17_2(inputFile('input.txt'))).toBe(0);
    });

    test('Part 2, check', () => {
        expect(day17_1(inputFile('check.txt'))).toBe('2,4,1,1,7,5,1,5,4,1,5,5,0,3,3,0');
    });
});

20534845615572n;
