const day1_1 = (input: string[]): number => {
    const left: number[] = [],
        right: number[] = [];
    for (const line of input) {
        let [l, r] = line.split(/\s+/);
        left.push(parseInt(l));
        right.push(parseInt(r));
    }
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);

    let sum = 0;
    for (let i = 0; i < left.length; i++) {
        sum += Math.abs(left[i] - right[i]);
    }

    return sum;
};

const day1_2 = (input: string[]): number => {
    const left: number[] = [],
        right: Map<number, number> = new Map();

    for (const line of input) {
        let [l, r] = line.split(/\s+/);
        left.push(parseInt(l));
        const rVal = parseInt(r);
        if (right.has(rVal)) {
            right.set(rVal, right.get(rVal)! + 1);
        } else {
            right.set(rVal, 1);
        }
    }

    let similarityScore = 0;
    for (let i = 0; i < left.length; i++) {
        similarityScore += left[i] * (right.get(left[i]) ?? 0);
    }

    return similarityScore;
};

export { day1_1, day1_2 };
