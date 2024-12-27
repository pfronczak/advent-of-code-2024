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

const FRONTIER = {
    '<]': [{ x: -2, y: 0 }],
    '>[': [{ x: 2, y: 0 }],
    '^[': [
        { x: 0, y: -1 },
        { x: 1, y: -1 },
    ],
    '^]': [
        { x: 0, y: -1 },
        { x: -1, y: -1 },
    ],
    'v[': [
        { x: 0, y: 1 },
        { x: 1, y: 1 },
    ],
    'v]': [
        { x: 0, y: 1 },
        { x: -1, y: 1 },
    ],
};

const repaint = (grid: string[][], boxes: { x: number; y: number }[]) => {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '[' || grid[y][x] === ']') {
                grid[y][x] = '.';
            }
        }
    }
    for (const box of boxes) {
        grid[box.y][box.x] = '[';
        grid[box.y][box.x + 1] = ']';
    }
};

const day15_2 = (input: string[]): number => {
    const grid: string[][] = [];
    const moves: string[] = [];
    const boxes: { x: number; y: number }[] = [];
    const robot = { x: 0, y: 0 };
    let map = true;
    for (let y = 0; y < input.length; y++) {
        const line = input[y];
        if (line === '') {
            map = false;
            continue;
        }
        if (map) {
            grid.push([]);
            line.split('').forEach((char, x) => {
                if (char === '#') {
                    grid[y].push(...['#', '#']);
                } else if (char === '.') {
                    grid[y].push(...['.', '.']);
                } else if (char === 'O') {
                    grid[y].push(...['[', ']']);
                    boxes.push({ x: x * 2, y });
                } else if (char === '@') {
                    robot.y = y;
                    robot.x = x * 2;
                    grid[y].push(...['.', '.']);
                }
            });
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
        } else if (neighbor === '[' || neighbor === ']') {
            let frontier = FRONTIER[m + neighbor].map((v) => ({ x: nx + v.x, y: ny + v.y }));
            let frontierVals: string[] = frontier.map((v) => grid[v.y][v.x]);
            let movedBoxes = new Set<string>([`${neighbor === '[' ? nx : nx - 1},${ny}`]);
            while (!frontierVals.some((v) => v === '#')) {
                if (frontierVals.every((v) => v === '.')) {
                    for (const box of boxes) {
                        if (movedBoxes.has(`${box.x},${box.y}`)) {
                            box.x += MOVES[m].x;
                            box.y += MOVES[m].y;
                        }
                    }
                    repaint(grid, boxes);
                    robot.x += MOVES[m].x;
                    robot.y += MOVES[m].y;
                    break;
                } else {
                    frontier = frontier.reduce((acc, v) => {
                        if (grid[v.y][v.x] === '.') {
                            acc.push(v);
                        } else {
                            movedBoxes.add(`${grid[v.y][v.x] === '[' ? v.x : v.x - 1},${v.y}`);
                            acc.push(...FRONTIER[m + grid[v.y][v.x]].map((vv) => ({ x: v.x + vv.x, y: v.y + vv.y })));
                        }
                        return acc;
                    }, []);
                    frontierVals = frontier.map((v) => grid[v.y][v.x]);
                }
            }
        }
    }

    let sum = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '[') {
                sum += 100 * y + x;
            }
        }
    }
    return sum;
};

export { day15_1, day15_2 };
