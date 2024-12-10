const day10_1 = (input: string[]): number => {
    const grid: number[][] = input.map((line) => line.split('').map((x) => parseInt(x)));
    let sum = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 0) {
                const workingSet = new Set<string>([`${x},${y}`]);
                const peaksReachable = new Set<string>();
                while (workingSet.size > 0) {
                    const current = workingSet.values().next().value;
                    workingSet.delete(current);
                    const [x, y] = current.split(',').map((x) => parseInt(x));
                    if (grid[y][x] === 9) {
                        peaksReachable.add(current);
                        continue;
                    }
                    for (let [nx, ny] of [
                        [x + 1, y],
                        [x - 1, y],
                        [x, y + 1],
                        [x, y - 1],
                    ]) {
                        if (nx >= 0 && nx < grid[y].length && ny >= 0 && ny < grid.length) {
                            if (grid[ny][nx] === grid[y][x] + 1) {
                                workingSet.add(`${nx},${ny}`);
                            }
                        }
                    }
                }
                sum += peaksReachable.size;
            }
        }
    }
    return sum;
};

const day10_2 = (input: string[]): number => {
    const grid: number[][] = input.map((line) => line.split('').map((x) => parseInt(x)));
    let sum = 0;
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] === 0) {
                const workingSet = new Set<string>([`${x},${y}`]);
                const pathsTo = new Map<string, number>([[`${x},${y}`, 1]]);
                const peaksReachable = new Set<string>();
                while (workingSet.size > 0) {
                    const current = workingSet.values().next().value;
                    workingSet.delete(current);
                    const [x, y] = current.split(',').map((x) => parseInt(x));
                    if (grid[y][x] === 9) {
                        peaksReachable.add(current);
                        continue;
                    }
                    for (let [nx, ny] of [
                        [x + 1, y],
                        [x - 1, y],
                        [x, y + 1],
                        [x, y - 1],
                    ]) {
                        if (nx >= 0 && nx < grid[y].length && ny >= 0 && ny < grid.length) {
                            if (grid[ny][nx] === grid[y][x] + 1) {
                                workingSet.add(`${nx},${ny}`);
                                pathsTo.set(`${nx},${ny}`, (pathsTo.get(`${nx},${ny}`) ?? 0) + pathsTo.get(current)!);
                            }
                        }
                    }
                }
                for (const peak of peaksReachable) {
                    sum += pathsTo.get(peak) ?? 0;
                }
            }
        }
    }
    return sum;
};

export { day10_1, day10_2 };
