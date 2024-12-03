const day3_1 = (input: string[]): number => {
    let sum = 0;
    for (const line of input) {
        const matches = line.matchAll(/mul\((\d+),(\d+)\)/g);
        for (const match of matches) {
            const [_, a, b] = match;
            sum += parseInt(a) * parseInt(b);
        }
    }
    return sum;
};

const day3_2 = (input: string[]): number => {
    let sum = 0;
    let enabled = true;
    for (const line of input) {
        const matches = line.matchAll(
            /(?<op>do)\(\)|(?<op>don't)\(\)|(?<op>mul)\((?<a>\d+),(?<b>\d+)\)/g,
        );
        for (const match of matches) {
            switch (match.groups?.op) {
                case 'do':
                    enabled = true;
                    break;
                case "don't":
                    enabled = false;
                    break;
                case 'mul':
                    if (enabled) {
                        sum +=
                            parseInt(match.groups.a) * parseInt(match.groups.b);
                    }
                    break;
            }
        }
    }
    return sum;
};

export { day3_1, day3_2 };
