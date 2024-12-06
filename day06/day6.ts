class Pos {
    static dirs = [
        { x: 0, y: -1 }, // up
        { x: 1, y: 0 }, // right
        { x: 0, y: 1 }, // down
        { x: -1, y: 0 }, // left
    ];
    constructor(
        public x: number,
        public y: number,
        public dir: number = 0,
    ) {}

    move(dir: number) {
        this.x += Pos.dirs[dir].x;
        this.y += Pos.dirs[dir].y;
    }

    turn(dir: number) {
        this.dir = (this.dir + dir + 4) % 4;
    }
}

const readInput = (input: string[]) => {
    const grid: string[][] = [];
    let guard: Pos;
    for (let y = 0; y < input.length; y++) {
        const guardPos = input[y].indexOf('^');
        if (guardPos !== -1) {
            guard = new Pos(guardPos, y);
            input[y] = input[y].replace('^', '.');
        }
        grid.push(input[y].split(''));
    }
    return { grid, guard: guard! };
};

const day6_1 = (input: string[]): number => {
    const { grid, guard } = readInput(input);
    const tilesVisited = new Set<string>();
    while (
        guard.x >= 0 &&
        guard.x < grid[0].length &&
        guard.y >= 0 &&
        guard.y < grid.length
    ) {
        tilesVisited.add(`${guard.x},${guard.y}`);
        if (
            grid[guard.y + Pos.dirs[guard.dir].y]?.[
                guard.x + Pos.dirs[guard.dir].x
            ] === '#'
        ) {
            guard.turn(1);
        } else {
            guard.move(guard.dir);
        }
    }
    return tilesVisited.size;
};

const cycleFound = (
    startingPos: { x: number; y: number },
    grid: string[][],
): boolean => {
    const guard = new Pos(startingPos.x, startingPos.y);
    const tilesVisited = new Set<string>();

    while (
        guard.x >= 0 &&
        guard.x < grid[0].length &&
        guard.y >= 0 &&
        guard.y < grid.length
    ) {
        tilesVisited.add(`${guard.x},${guard.y},${guard.dir}`);

        if (
            grid[guard.y + Pos.dirs[guard.dir].y]?.[
                guard.x + Pos.dirs[guard.dir].x
            ] === '#'
        ) {
            guard.turn(1);
        } else {
            guard.move(guard.dir);
        }
        if (tilesVisited.has(`${guard.x},${guard.y},${guard.dir}`)) {
            return true;
        }
    }
    return false;
};

const day6_2 = (input: string[]): number => {
    const { grid, guard } = readInput(input);
    let obstructionPosCount = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === '#' || (x === guard.x && y === guard.y)) {
                continue;
            }
            const gridCopy = grid.map((row) => [...row]);
            gridCopy[y][x] = '#';
            if (cycleFound(guard, gridCopy)) {
                obstructionPosCount++;
            }
        }
    }

    return obstructionPosCount;
};

export { day6_1, day6_2 };
