import { readFileSync } from 'fs';
import { day23_1, day23_2 } from './day23';

const inputFile = (fileName: string) =>
    readFileSync(`day23/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

describe('Day 23: LAN Party', () => {
    test('Part 1, example 1', () => {
        expect(day23_1(inputFile('sample.txt'))).toBe(7);
    });

    test('Part 1, puzzle input', () => {
        expect(day23_1(inputFile('input.txt'))).toBe(1173);
    });

    test('Part 2, example 1', () => {
        expect(day23_2(inputFile('sample.txt'))).toBe('co,de,ka,ta');
    });

    test('Part 2, puzzle input', () => {
        expect(day23_2(inputFile('input.txt'))).toBe('cm,de,ez,gv,hg,iy,or,pw,qu,rs,sn,uc,wq');
    });
});
