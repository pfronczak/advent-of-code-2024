const isXmas = (
    grid: string[][],
    x: number,
    y: number,
    dx: number,
    dy: number,
): boolean => {
    for (let i = 0; i < 4; i++) {
        if (y + i * dy < 0 || y + i * dy >= grid.length) {
            return false;
        }
        if (x + i * dx < 0 || x + i * dx >= grid[y].length) {
            return false;
        }
        if (grid[y + i * dy][x + i * dx] !== 'XMAS'.charAt(i)) {
            return false;
        }
    }
    return true;
};

const day4_1 = (input: string[]): number => {
    let count = 0;
    const grid = input.map((line) => line.split(''));
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (dx == 0 && dy == 0) {
                        continue;
                    }
                    if (isXmas(grid, x, y, dx, dy)) {
                        count++;
                    }
                }
            }
        }
    }
    return count;
};

const isMasX = (grid: string[][], x: number, y: number): boolean => {
    const diag1 = [grid[y - 1][x - 1], grid[y][x], grid[y + 1][x + 1]].join('');
    const diag2 = [grid[y - 1][x + 1], grid[y][x], grid[y + 1][x - 1]].join('');
    return (
        (diag1 === 'MAS' || diag1 === 'SAM') &&
        (diag2 === 'MAS' || diag2 === 'SAM')
    );
};

const day4_2 = (input: string[]): number => {
    let count = 0;
    const grid = input.map((line) => line.split(''));
    for (let y = 1; y < grid.length - 1; y++) {
        for (let x = 1; x < grid[y].length - 1; x++) {
            if (grid[y][x] === 'A' && isMasX(grid, x, y)) {
                count++;
            }
        }
    }
    return count;
};

export { day4_1, day4_2 };
