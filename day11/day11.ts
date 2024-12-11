const day11_1 = (input: string[], cycles: number = 25): number => {
    let stones = input[0].split(' ').map((x) => parseInt(x));
    for (let i = 0; i < cycles; i++) {
        let nextGen: number[] = [];
        for (const s of stones) {
            if (s === 0) {
                nextGen.push(1);
            } else if (s.toString().length % 2 === 0) {
                let str = s.toString();
                nextGen.push(parseInt(str.substring(0, str.length / 2)));
                nextGen.push(parseInt(str.substring(str.length / 2)));
            } else {
                nextGen.push(s * 2024);
            }
        }
        stones = nextGen;
    }
    return stones.length;
};

const day11_2 = (input: string[], cycles: number = 75): number => {
    let stones = input[0].split(' ').map((x) => parseInt(x));
    let stoneCounts = new Map<number, number>();
    for (const s of stones) {
        stoneCounts.set(s, (stoneCounts.get(s) ?? 0) + 1);
    }
    for (let i = 0; i < cycles; i++) {
        let nextGen = new Map<number, number>();
        for (const [s, count] of stoneCounts) {
            if (s === 0) {
                nextGen.set(1, (nextGen.get(1) ?? 0) + count);
            } else if (s.toString().length % 2 === 0) {
                let str = s.toString();
                let left = parseInt(str.substring(0, str.length / 2));
                let right = parseInt(str.substring(str.length / 2));
                nextGen.set(left, (nextGen.get(left) ?? 0) + count);
                nextGen.set(right, (nextGen.get(right) ?? 0) + count);
            } else {
                nextGen.set(s * 2024, (nextGen.get(s * 2024) ?? 0) + count);
            }
        }
        stoneCounts = nextGen;
    }
    return Array.from(stoneCounts.values()).reduce((sum, current) => sum + current, 0);
};

export { day11_1, day11_2 };
