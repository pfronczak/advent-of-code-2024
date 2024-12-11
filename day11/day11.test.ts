import { readFileSync } from 'fs';
import { day11_1, day11_2 } from './day11';

const inputFile = (fileName: string) =>
    readFileSync(`day11/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 11: Plutonian Pebbles', () => {
    test('Part 1, example 1', () => {
        expect(day11_1(inputFile('sample.txt'), 6)).toBe(22);
    });

    test('Part 1, example 2', () => {
        expect(day11_1(inputFile('sample.txt'))).toBe(55312);
    });

    test('Part 1, puzzle input', () => {
        expect(day11_1(inputFile('input.txt'))).toBe(216042);
    });

    test('Part 2, example 1', () => {
        expect(day11_2(inputFile('sample.txt'), 6)).toBe(22);
    });

    test('Part 2, example 2', () => {
        expect(day11_2(inputFile('sample.txt'), 25)).toBe(55312);
    });

    test('Part 2, puzzle input', () => {
        expect(day11_2(inputFile('input.txt'))).toBe(255758646442399);
    });
});
