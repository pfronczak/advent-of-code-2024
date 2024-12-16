const MOVES = {
    '<': { x: -1, y: 0 },
    '^': { x: 0, y: -1 },
    '>': { x: 1, y: 0 },
    v: { x: 0, y: 1 },
};

const day15_1 = (input: string[]): number => {
    const grid: string[][] = [];
    const moves: string[] = [];
    const robot = { x: 0, y: 0 };
    let map = true;
    for (let y = 0; y < input.length; y++) {
        const line = input[y];
        if (line === '') {
            map = false;
            continue;
        }
        if (map) {
            grid.push(line.split(''));
            if (line.indexOf('@') > -1) {
                robot.y = y;
                robot.x = line.indexOf('@');
                grid[y][robot.x] = '.';
            }
        } else {
            moves.push(...line.split(''));
        }
    }

    for (let m of moves) {
        let nx = robot.x + MOVES[m].x;
        let ny = robot.y + MOVES[m].y;
        let neighbor = grid[ny][nx];
        if (neighbor === '#') {
            continue;
        } else if (neighbor === '.') {
            robot.x += MOVES[m].x;
            robot.y += MOVES[m].y;
        } else if (neighbor === 'O') {
            let nearest = { x: nx, y: ny };
            while (neighbor !== '#') {
                nx += MOVES[m].x;
                ny += MOVES[m].y;
                neighbor = grid[ny][nx];
                if (neighbor === '.') {
                    grid[ny][nx] = 'O';
                    grid[nearest.y][nearest.x] = '.';
                    robot.x += MOVES[m].x;
                    robot.y += MOVES[m].y;
                    break;
                }
            }
        }
    }

    let sum = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 'O') {
                sum += 100 * y + x;
            }
        }
    }
    return sum;
};

const day15_2 = (input: string[]): number => {
    return 0;
};

export { day15_1, day15_2 };
