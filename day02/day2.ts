const isSafe = (levels: number[]): boolean => {
    let allIncreasing = true;
    let allDecreasing = true;
    let diffInRange = true;
    for (let i = 1; i < levels.length; i++) {
        if (levels[i] < levels[i - 1]) {
            allIncreasing = false;
        }
        if (levels[i] > levels[i - 1]) {
            allDecreasing = false;
        }
        if (
            Math.abs(levels[i] - levels[i - 1]) < 1 ||
            Math.abs(levels[i] - levels[i - 1]) > 3
        ) {
            diffInRange = false;
        }
    }
    if (diffInRange && (allIncreasing || allDecreasing)) {
        return true;
    }
    return false;
};

const day2_1 = (input: string[]): number => {
    let safeReports = 0;
    for (const line of input) {
        const levels = line.split(/\s+/).map((x) => parseInt(x));

        if (isSafe(levels)) {
            safeReports++;
        }
    }
    return safeReports;
};

const day2_2 = (input: string[]): number => {
    let safeReports = 0;
    for (const line of input) {
        const allLevels = line.split(/\s+/).map((x) => parseInt(x));
        for (let removed = -1; removed < allLevels.length; removed++) {
            let levels =
                removed < 0 ? allLevels : allLevels.toSpliced(removed, 1);
            if (isSafe(levels)) {
                safeReports++;
                break;
            }
        }
    }
    return safeReports;
};

export { day2_1, day2_2 };
