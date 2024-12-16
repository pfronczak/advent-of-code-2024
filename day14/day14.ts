type Coords = { x: number; y: number };
type Robot = {
    p: Coords;
    v: Coords;
};

const day14_1 = (input: string[], width: number, height: number): number => {
    const robots: Robot[] = [];
    for (let line of input) {
        const [_, x, y, vx, vy] = line
            .match(/p=(\d+),(\d+) v=(\-?\d+),(\-?\d+)/)!
            .map((v, i) => (i > 0 ? parseInt(v) : v)) as [string, number, number, number, number];
        robots.push({
            p: { x, y },
            v: { x: vx, y: vy },
        });
    }

    for (let i = 0; i < 100; i++) {
        for (const r of robots) {
            r.p.x = (r.p.x + r.v.x + width) % width;
            r.p.y = (r.p.y + r.v.y + height) % height;
        }
    }

    const sums: number[] = Array(4).fill(0);
    for (const r of robots) {
        if (r.p.x < (width - 1) / 2 && r.p.y < (height - 1) / 2) {
            sums[0]++;
        } else if (r.p.x > (width - 1) / 2 && r.p.y < (height - 1) / 2) {
            sums[1]++;
        } else if (r.p.x > (width - 1) / 2 && r.p.y > (height - 1) / 2) {
            sums[2]++;
        } else if (r.p.x < (width - 1) / 2 && r.p.y > (height - 1) / 2) {
            sums[3]++;
        }
    }
    return sums.reduce((mul, v) => mul * v, 1);
};

const day14_2 = (input: string[], width: number, height: number, iterations: number): number => {
    const robots: Robot[] = [];
    for (let line of input) {
        const [_, x, y, vx, vy] = line
            .match(/p=(\d+),(\d+) v=(\-?\d+),(\-?\d+)/)!
            .map((v, i) => (i > 0 ? parseInt(v) : v)) as [string, number, number, number, number];
        robots.push({
            p: { x, y },
            v: { x: vx, y: vy },
        });
    }

    for (let i = 0; i < iterations; i++) {
        for (const r of robots) {
            r.p.x = (r.p.x + r.v.x + width) % width;
            r.p.y = (r.p.y + r.v.y + height) % height;
        }

        const coords = new Set<string>();
        for (const r of robots) {
            coords.add(`${r.p.x},${r.p.y}`);
        }

        for (const c of coords) {
            const [cx, cy] = c.split(',').map((x) => parseInt(x));
            if ([1, 2, 3, 4, 5, 6, 7, 8].every((v) => coords.has(`${cx + v},${cy}`))) {
                process.stdout.write(`After ${i + 1} seconds:\n`);

                for (let y = 0; y < height; y++) {
                    for (let x = 0; x < width; x++) {
                        if (coords.has(`${x},${y}`)) {
                            process.stdout.write('*');
                        } else {
                            process.stdout.write(' ');
                        }
                    }
                    process.stdout.write('\n');
                }
                return i + 1;
            }
        }
    }
    return 0;
};

export { day14_1, day14_2 };
