const day17_1 = (input: string[]): string => {
    let regA = BigInt(input[0].split(': ')[1]);
    let regB = BigInt(input[1].split(': ')[1]);
    let regC = BigInt(input[2].split(': ')[1]);
    const program: number[] = input[4]
        .split(': ')[1]
        .split(',')
        .map((x) => parseInt(x));

    const combo = (x: number): bigint => (x < 4 ? BigInt(x) : [regA, regB, regC][x - 4]);
    let ip = 0;
    const output: number[] = [];
    while (ip < program.length) {
        let op = program[ip];
        let operand = program[ip + 1];
        switch (op) {
            case 0: // adv
                regA = regA >> combo(operand);
                ip += 2;
                break;
            case 1: // bxl
                regB = regB ^ BigInt(operand);
                ip += 2;
                break;
            case 2: // bst
                regB = combo(operand) % 8n;
                ip += 2;
                break;
            case 3: // jnz
                ip = regA === 0n ? ip + 2 : operand;
                break;
            case 4: // bxc
                regB = regB ^ regC;
                ip += 2;
                break;
            case 5: // out
                output.push(Number(combo(operand) % 8n));
                ip += 2;
                break;
            case 6: // bdv
                regB = regA >> combo(operand);
                ip += 2;
                break;
            case 7: // cdv
                regC = regA >> combo(operand);
                ip += 2;
                break;
        }
    }

    return output.join(',');
};

const runTillFirstOutput = (program: number[], regA: bigint) => {
    let regB = 0n,
        regC = 0n;
    const combo = (x: number): bigint => (x < 4 ? BigInt(x) : [regA, regB, regC][x - 4]);
    let ip = 0;
    while (ip < program.length) {
        let op = program[ip];
        let operand = program[ip + 1];
        switch (op) {
            case 0: // adv
                regA = regA >> combo(operand);
                ip += 2;
                break;
            case 1: // bxl
                regB = regB ^ BigInt(operand);
                ip += 2;
                break;
            case 2: // bst
                regB = combo(operand) % 8n;
                ip += 2;
                break;
            case 3: // jnz
                ip = regA === 0n ? ip + 2 : operand;
                break;
            case 4: // bxc
                regB = regB ^ regC;
                ip += 2;
                break;
            case 5: // out
                return Number(combo(operand) % 8n);
            case 6: // bdv
                regB = regA >> combo(operand);
                ip += 2;
                break;
            case 7: // cdv
                regC = regA >> combo(operand);
                ip += 2;
                break;
        }
    }
};

const day17_2 = (input: string[]): bigint => {
    const program: number[] = input[4]
        .split(': ')[1]
        .split(',')
        .map((x) => parseInt(x));

    let regA = 0n;
    for (let i = program.length - 1; i >= 0; i--) {
        let j = 0;
        while (true) {
            const output = runTillFirstOutput(program, regA);
            if (output === program[i]) {
                if (i == 1 && j < 6) {
                    regA++;
                    j++;
                    continue;
                }
                if (i > 0) {
                    regA = regA << BigInt(3);
                }
                break;
            }
            regA++;
            j++;
        }
    }
    return regA;
};

export { day17_1, day17_2 };
