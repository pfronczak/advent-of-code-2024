import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Node = { x: number; y: number; distance: number; cost: number };

const minDistance = (grid: string[][]): number => {
    const size = grid.length;
    const queue = new MinPriorityQueue<Node>((n: Node) => n.cost);
    queue.push({ x: 0, y: 0, distance: 0, cost: 2 * size });
    const visited = new Set<string>();
    while (!queue.isEmpty()) {
        let node = queue.pop();
        if (visited.has(`${node.x},${node.y}`)) {
            continue;
        }
        if (node.x === size - 1 && node.y === size - 1) {
            return node.distance;
        }
        visited.add(`${node.x},${node.y}`);

        for (const n of [
            { x: node.x - 1, y: node.y },
            { x: node.x + 1, y: node.y },
            { x: node.x, y: node.y - 1 },
            { x: node.x, y: node.y + 1 },
        ]) {
            if (n.x < 0 || n.y < 0 || n.x >= size || n.y >= size || grid[n.y][n.x] === '#') {
                continue;
            }
            if (!visited.has(`${n.x},${n.y}`)) {
                queue.push({
                    x: n.x,
                    y: n.y,
                    distance: node.distance + 1,
                    cost: node.distance + 1 + (size - n.x) + (size - n.y),
                });
            }
        }
    }
    return -1;
};

const day18_1 = (input: string[], size: number, iterations: number): number => {
    const grid = Array.from({ length: size }, () => Array.from({ length: size }, () => '.'));
    for (let i = 0; i < iterations; i++) {
        const [x, y] = input[i].split(',');
        grid[y][x] = '#';
    }
    return minDistance(grid);
};

const day18_2 = (input: string[], size: number, iterations: number): string => {
    const grid = Array.from({ length: size }, () => Array.from({ length: size }, () => '.'));
    for (let i = 0; i < input.length; i++) {
        const [x, y] = input[i].split(',');
        grid[y][x] = '#';
        if (i > iterations - 1) {
            const minPath = minDistance(grid);
            if (minPath === -1) {
                return `${x},${y}`;
            }
        }
    }
    return '';
};

export { day18_1, day18_2 };
