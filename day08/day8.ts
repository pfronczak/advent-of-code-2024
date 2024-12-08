type Point = {
    x: number;
    y: number;
};

const readInput = (input: string[]) => {
    const antennas = new Map<string, Point[]>();
    for (let y = 0; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            let tile = input[y].charAt(x);
            if (tile !== '.') {
                if (antennas.has(tile)) {
                    antennas.get(tile)?.push({ x, y });
                } else {
                    antennas.set(tile, [{ x, y }]);
                }
            }
        }
    }
    return antennas;
};

const withinBounds = (p: Point, input: string[]) => {
    return p.y >= 0 && p.y < input.length && p.x >= 0 && p.x < input[0].length;
};

const day8_1 = (input: string[]): number => {
    const antennas = readInput(input);

    const allAntinodes = new Set<string>();
    for (const sameFreq of antennas.values()) {
        if (sameFreq.length > 1) {
            for (let i = 0; i < sameFreq.length - 1; i++) {
                for (let j = i + 1; j < sameFreq.length; j++) {
                    const antinodes: Point[] = [
                        {
                            x: sameFreq[i].x + (sameFreq[i].x - sameFreq[j].x),
                            y: sameFreq[i].y + (sameFreq[i].y - sameFreq[j].y),
                        },
                        {
                            x: sameFreq[j].x + (sameFreq[j].x - sameFreq[i].x),
                            y: sameFreq[j].y + (sameFreq[j].y - sameFreq[i].y),
                        },
                    ];
                    for (let a of antinodes) {
                        if (withinBounds(a, input)) {
                            allAntinodes.add(`${a.x},${a.y}`);
                        }
                    }
                }
            }
        }
    }
    return allAntinodes.size;
};

const day8_2 = (input: string[]): number => {
    const antennas = readInput(input);

    const allAntinodes = new Set<string>();
    for (const sameFreq of antennas.values()) {
        if (sameFreq.length > 1) {
            for (let i = 0; i < sameFreq.length - 1; i++) {
                for (let j = i + 1; j < sameFreq.length; j++) {
                    let antinode: Point = { x: sameFreq[i].x, y: sameFreq[i].y };
                    while (withinBounds(antinode, input)) {
                        allAntinodes.add(`${antinode.x},${antinode.y}`);
                        antinode.x += sameFreq[i].x - sameFreq[j].x;
                        antinode.y += sameFreq[i].y - sameFreq[j].y;
                    }
                    antinode = { x: sameFreq[j].x, y: sameFreq[j].y };
                    while (withinBounds(antinode, input)) {
                        allAntinodes.add(`${antinode.x},${antinode.y}`);
                        antinode.x += sameFreq[j].x - sameFreq[i].x;
                        antinode.y += sameFreq[j].y - sameFreq[i].y;
                    }
                }
            }
        }
    }
    return allAntinodes.size;
};

export { day8_1, day8_2 };
