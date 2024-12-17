import { MinPriorityQueue } from '@datastructures-js/priority-queue';

type Pos = { x: number; y: number };
type Node = { x: number; y: number; dir: 'N' | 'S' | 'E' | 'W'; cost: number };

const day16_1 = (input: string[]): number => {
    const grid: string[][] = [];
    let start!: Pos, end!: Pos;
    for (let y = 0; y < input.length; y++) {
        grid.push(input[y].split(''));
        if (input[y].indexOf('S') > -1) {
            start = { x: input[y].indexOf('S'), y: y };
            grid[y][start.x] = '.';
        }
        if (input[y].indexOf('E') > -1) {
            end = { x: input[y].indexOf('E'), y: y };
            grid[y][end.x] = '.';
        }
    }

    const queue = new MinPriorityQueue<Node>((n: Node) => n.cost);
    queue.enqueue({ x: start.x, y: start.y, dir: 'E', cost: 0 });
    const visited = new Set<string>();
    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        if (visited.has(`${node.x},${node.y},${node.dir}`)) {
            continue;
        }
        if (node.x === end.x && node.y === end.y) {
            return node.cost;
        }
        visited.add(`${node.x},${node.y},${node.dir}`);
        const neighbors: Node[] = [];

        switch (node.dir) {
            case 'N':
                neighbors.push({ x: node.x, y: node.y - 1, dir: 'N', cost: node.cost + 1 });
                neighbors.push({ x: node.x, y: node.y + 1, dir: 'S', cost: node.cost + 2001 });
                neighbors.push({ x: node.x + 1, y: node.y, dir: 'E', cost: node.cost + 1001 });
                neighbors.push({ x: node.x - 1, y: node.y, dir: 'W', cost: node.cost + 1001 });
                break;
            case 'S':
                neighbors.push({ x: node.x, y: node.y - 1, dir: 'N', cost: node.cost + 2001 });
                neighbors.push({ x: node.x, y: node.y + 1, dir: 'S', cost: node.cost + 1 });
                neighbors.push({ x: node.x + 1, y: node.y, dir: 'E', cost: node.cost + 1001 });
                neighbors.push({ x: node.x - 1, y: node.y, dir: 'W', cost: node.cost + 1001 });
                break;
            case 'E':
                neighbors.push({ x: node.x, y: node.y - 1, dir: 'N', cost: node.cost + 1001 });
                neighbors.push({ x: node.x, y: node.y + 1, dir: 'S', cost: node.cost + 1001 });
                neighbors.push({ x: node.x + 1, y: node.y, dir: 'E', cost: node.cost + 1 });
                neighbors.push({ x: node.x - 1, y: node.y, dir: 'W', cost: node.cost + 2001 });
                break;
            case 'W':
                neighbors.push({ x: node.x, y: node.y - 1, dir: 'N', cost: node.cost + 1001 });
                neighbors.push({ x: node.x, y: node.y + 1, dir: 'S', cost: node.cost + 1001 });
                neighbors.push({ x: node.x + 1, y: node.y, dir: 'E', cost: node.cost + 2001 });
                neighbors.push({ x: node.x - 1, y: node.y, dir: 'W', cost: node.cost + 1 });
                break;
        }

        for (const n of neighbors) {
            if (grid[n.y][n.x] === '.') {
                if (!visited.has(`${n.x},${n.y},${n.dir}`)) {
                    queue.enqueue(n);
                }
            }
        }
    }

    return 0;
};

const day16_2 = (input: string[]): number => {
    return 0;
};

export { day16_1, day16_2 };
