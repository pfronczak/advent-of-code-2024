const reduce = (valueSoFar: number, numbers: number[], index: number, expectedResult: number) => {
    if (index >= numbers.length) {
        if (valueSoFar === expectedResult) {
            return expectedResult;
        } else {
            return 0;
        }
    }
    if (
        reduce(valueSoFar + numbers[index], numbers, index + 1, expectedResult) > 0 ||
        reduce(valueSoFar * numbers[index], numbers, index + 1, expectedResult) > 0
    ) {
        return expectedResult;
    }

    return 0;
};

const day7_1 = (input: string[]): number => {
    let sum = 0;
    for (const line of input) {
        const [result, equation] = line.split(': ');
        const numbers = equation.split(' ').map((x) => parseInt(x));
        sum += reduce(0, numbers, 0, parseInt(result));
    }
    return sum;
};

const reduce_2 = (valueSoFar: number, numbers: number[], index: number, expectedResult: number) => {
    if (index >= numbers.length) {
        if (valueSoFar === expectedResult) {
            return expectedResult;
        } else {
            return 0;
        }
    }
    if (
        reduce_2(valueSoFar + numbers[index], numbers, index + 1, expectedResult) > 0 ||
        reduce_2(valueSoFar * numbers[index], numbers, index + 1, expectedResult) > 0 ||
        reduce_2(parseInt(valueSoFar.toString() + numbers[index].toString()), numbers, index + 1, expectedResult) > 0
    ) {
        return expectedResult;
    }

    return 0;
};

const day7_2 = (input: string[]): number => {
    let sum = 0;
    for (const line of input) {
        const [result, equation] = line.split(': ');
        const numbers = equation.split(' ').map((x) => parseInt(x));
        sum += reduce_2(numbers[0], numbers, 1, parseInt(result));
    }
    return sum;
};

export { day7_1, day7_2 };
