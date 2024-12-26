const day25_1 = (input: string[]): number => {
    const keys: number[][] = [];
    const locks: number[][] = [];
    for (let i = 0; i < input.length; i += 8) {
        if (input[i] === '#####') {
            let lock: number[] = new Array(input[i].length);
            for (let x = 0; x < input[i].length; x++) {
                for (let y = 0; y < 6; y++) {
                    if (input[i + 1 + y].charAt(x) === '.' && lock[x] === undefined) {
                        lock[x] = y;
                    }
                }
            }
            locks.push(lock);
        } else if (input[i + 6] === '#####') {
            let key: number[] = new Array(input[i].length);
            for (let x = 0; x < input[i].length; x++) {
                for (let y = 0; y < 6; y++) {
                    if (input[i + 5 - y].charAt(x) === '.' && key[x] === undefined) {
                        key[x] = y;
                    }
                }
            }
            keys.push(key);
        }
    }
    let matching = 0;
    for (const key of keys) {
        for (const lock of locks) {
            if (key.every((k, i) => k + lock[i] <= 5)) {
                matching++;
            }
        }
    }
    return matching;
};

const day25_2 = (input: string[]): number => {
    return 0;
};

export { day25_1, day25_2 };
