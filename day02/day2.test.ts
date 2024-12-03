import { readFileSync } from 'fs';
import { day2_1, day2_2 } from './day2';

const sample = readFileSync('day02/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

const input = readFileSync('day02/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 2: Red-Nosed Reports', () => {
    test('Part 1, example 1', () => {
        expect(day2_1(sample)).toBe(2);
    });

    test('Part 1, puzzle input', () => {
        expect(day2_1(input)).toBe(639);
    });

    test('Part 2, example 1', () => {
        expect(day2_2(sample)).toBe(4);
    });

    test('Part 2, puzzle input', () => {
        expect(day2_2(input)).toBe(674);
    });
});
