import { readFileSync } from 'fs';
import { day11_1, day11_2 } from './day11';

const inputFile = (fileName: string) =>
    readFileSync(`day11/${fileName}`, 'utf8')
        .split('\n')
        .map((line) => line.trim());

day11_2(inputFile('input.txt'));
