import { readFileSync } from 'fs';
import { day7_1, day7_2 } from './day7';

const inputFile = (fileName: string) =>
    readFileSync(`day07/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 7: Bridge Repair', () => {
    test('Part 1, example 1', () => {
        expect(day7_1(inputFile('sample.txt'))).toBe(3749);
    });

    test('Part 1, puzzle input', () => {
        expect(day7_1(inputFile('input.txt'))).toBe(1038838357795);
    });

    test('Part 2, example 1', () => {
        expect(day7_2(inputFile('sample.txt'))).toBe(11387);
    });

    test('Part 2, puzzle input', () => {
        expect(day7_2(inputFile('input.txt'))).toBe(254136560217241);
    });
});
