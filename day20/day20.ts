type Pos = { x: number; y: number };
type Node = { x: number; y: number; distance: number };

const distance = (
    grid: string[][],
    start: Pos,
    end: Pos,
    cheatStart = -5,
    startDist = 0,
    visited = new Set<string>(),
    distances: number[] = [],
): number[] => {
    let next: Node | null = { x: start.x, y: start.y, distance: startDist };
    while (next) {
        let node = next;
        next = null;
        if (visited.has(`${node.x},${node.y}`)) {
            continue;
        }
        if (node.x === end.x && node.y === end.y) {
            distances.push(node.distance);
            break;
        }
        visited.add(`${node.x},${node.y}`);

        const neighbours: Node[] = [];
        for (const n of [
            { x: node.x - 1, y: node.y },
            { x: node.x + 1, y: node.y },
            { x: node.x, y: node.y - 1 },
            { x: node.x, y: node.y + 1 },
        ]) {
            if (n.x < 0 || n.y < 0 || n.x >= grid[0].length || n.y >= grid.length) {
                continue;
            }
            if (node.distance !== cheatStart && grid[n.y][n.x] === '#') {
                continue;
            }
            if (!visited.has(`${n.x},${n.y}`)) {
                neighbours.push({
                    x: n.x,
                    y: n.y,
                    distance: node.distance + 1,
                });
            }
        }
        if (neighbours.length === 1) {
            next = neighbours[0];
        } else {
            for (const n of neighbours) {
                distance(grid, n, end, cheatStart, n.distance, new Set<string>(visited), distances);
            }
        }
    }
    return distances;
};

const day20_1 = (input: string[]): number => {
    const grid = input.map((line) => line.split(''));
    const start = { x: 0, y: 0 },
        end = { x: 0, y: 0 };
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 'S') {
                start.x = x;
                start.y = y;
                grid[y][x] = '.';
            } else if (grid[y][x] === 'E') {
                end.x = x;
                end.y = y;
                grid[y][x] = '.';
            }
        }
    }

    let count = 0;
    const cheats = new Map<number, number>();
    const trackTime = distance(grid, start, end)[0];
    for (let i = 0; i < trackTime; i++) {
        const times = distance(grid, start, end, i);
        for (const time of times) {
            cheats.set(trackTime - time, (cheats.get(trackTime - time) ?? 0) + 1);
            if (trackTime - time >= 100) {
                count++;
            }
        }
    }
    return count;
};

const day20_2 = (input: string[]): number => {
    return 0;
};

export { day20_1, day20_2 };
