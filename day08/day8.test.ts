import { readFileSync } from 'fs';
import { day8_1, day8_2 } from './day8';

const inputFile = (fileName: string) =>
    readFileSync(`day08/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 8: Resonant Collinearity', () => {
    test('Part 1, example 1', () => {
        expect(day8_1(inputFile('sample.txt'))).toBe(4);
    });

    test('Part 1, example 2', () => {
        expect(day8_1(inputFile('sample2.txt'))).toBe(14);
    });

    test('Part 1, puzzle input', () => {
        expect(day8_1(inputFile('input.txt'))).toBe(293);
    });

    test('Part 2, example 1', () => {
        expect(day8_2(inputFile('sample3.txt'))).toBe(9);
    });

    test('Part 2, example 2', () => {
        expect(day8_2(inputFile('sample2.txt'))).toBe(34);
    });

    test('Part 2, puzzle input', () => {
        expect(day8_2(inputFile('input.txt'))).toBe(934);
    });
});
