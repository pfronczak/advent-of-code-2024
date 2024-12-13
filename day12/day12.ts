const day12_1 = (input: string[]): number => {
    const garden = input.map((line) => line.split(''));
    const visited = new Set<string>();
    let priceSum = 0;
    for (let y = 0; y < garden.length; y++) {
        for (let x = 0; x < garden[y].length; x++) {
            if (visited.has(`${x},${y}`)) {
                continue;
            }

            let area = 0;
            let perimeter = 0;
            const queue = [[x, y]];
            visited.add(`${x},${y}`);
            while (queue.length > 0) {
                const [x, y] = queue.shift()!;
                area++;
                for (const [nx, ny] of [
                    [x - 1, y],
                    [x + 1, y],
                    [x, y - 1],
                    [x, y + 1],
                ]) {
                    if (
                        nx >= 0 &&
                        nx < garden[y].length &&
                        ny >= 0 &&
                        ny < garden.length &&
                        garden[ny][nx] === garden[y][x]
                    ) {
                        if (!visited.has(`${nx},${ny}`)) {
                            visited.add(`${nx},${ny}`);
                            queue.push([nx, ny]);
                        }
                    } else {
                        perimeter++;
                    }
                }
            }
            priceSum += area * perimeter;
        }
    }
    return priceSum;
};

const day12_2 = (input: string[]): number => {
    return 0;
};

export { day12_1, day12_2 };
