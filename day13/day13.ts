type Pos = { x: number; y: number };

type Machine = {
    A: Pos;
    B: Pos;
    prize: Pos;
    minCost: number;
};

const solve = (machine: Machine, pos: Pos = { x: 0, y: 0 }, cost = 0, memo = new Map<string, number>()): number => {
    if (pos.x === machine.prize.x && pos.y === machine.prize.y) {
        machine.minCost = Math.min(cost, machine.minCost);
        return machine.minCost;
    }
    if (pos.x > machine.prize.x || pos.y > machine.prize.y || cost > machine.minCost) {
        return Infinity;
    }
    if (memo.has(`${pos.x},${pos.y},${cost}`)) {
        return memo.get(`${pos.x},${pos.y},${cost}`)!;
    }
    const result = Math.min(
        solve(machine, { x: pos.x + machine.B.x, y: pos.y + machine.B.y }, 1 + cost, memo),
        solve(machine, { x: pos.x + machine.A.x, y: pos.y + machine.A.y }, 3 + cost, memo),
    );
    memo.set(`${pos.x},${pos.y},${cost}`, result);
    return result;
};

const day13_1 = (input: string[]): number => {
    const machines: Machine[] = [];
    for (let i = 0; i < input.length; i += 4) {
        const [_, ax, ay] = input[i].match(/Button A: X\+(\d+), Y\+(\d+)/)!;
        const [__, bx, by] = input[i + 1].match(/Button B: X\+(\d+), Y\+(\d+)/)!;
        const [___, px, py] = input[i + 2].match(/Prize: X=(\d+), Y=(\d+)/)!;
        machines.push({
            A: { x: parseInt(ax), y: parseInt(ay) },
            B: { x: parseInt(bx), y: parseInt(by) },
            prize: { x: parseInt(px), y: parseInt(py) },
            minCost: Infinity,
        });
    }

    for (const machine of machines) {
        solve(machine);
    }
    return machines.reduce((sum, m) => sum + (m.minCost == Infinity ? 0 : m.minCost), 0);
};

const day13_2 = (input: string[]): number => {
    return 0;
};

export { day13_1, day13_2 };
