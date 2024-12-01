import { readFileSync } from 'fs';
import { day1_1, day1_2 } from './day1';

const sample = readFileSync('day01/sample.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

const input = readFileSync('day01/input.txt', 'utf8')
    .split('\n')
    .map((line) => line.trim());

describe('Day 1: Historian Hysteria', () => {
    test('Part 1, example 1', () => {
        expect(day1_1(sample)).toBe(11);
    });

    test('Part 1, puzzle input', () => {
        expect(day1_1(input)).toBe(1197984);
    });

    test('Part 2, example 1', () => {
        expect(day1_2(sample)).toBe(31);
    });

    test('Part 2, puzzle input', () => {
        expect(day1_2(input)).toBe(23387399);
    });
});
