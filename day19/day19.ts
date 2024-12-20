const solve = (design: string, patterns: string[]): boolean => {
    if (design === '') {
        return true;
    }

    const possiblePatterns = patterns.filter((p) => design.startsWith(p));
    if (possiblePatterns.length > 0) {
        return possiblePatterns.some((pattern) => solve(design.substring(pattern.length), patterns));
    }
    return false;
};

const day19_1 = (input: string[]): number => {
    const patterns = input[0].split(/,\s+/);
    const designs = input.slice(2);
    return designs.filter((design) => solve(design, patterns)).length;
};

const solve2 = (design: string, patterns: string[], memo: Map<string, number>): number => {
    if (design === '') {
        return 1;
    }

    if (memo.has(design)) {
        return memo.get(design)!;
    }

    const possiblePatterns = patterns.filter((p) => design.startsWith(p));
    if (possiblePatterns.length > 0) {
        const result = possiblePatterns.reduce(
            (sum, pattern) => sum + solve2(design.substring(pattern.length), patterns, memo),
            0,
        );
        memo.set(design, result);
        return result;
    }
    return 0;
};

const day19_2 = (input: string[]): number => {
    const patterns = input[0].split(/,\s+/);
    const designs = input.slice(2);
    return designs.reduce((sum, design) => {
        console.log(new Date());
        return sum + solve2(design, patterns, new Map<string, number>());
    }, 0);
};

export { day19_1, day19_2 };
