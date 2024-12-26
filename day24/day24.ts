type Gate = {
    op: string;
    inA: string;
    inB: string;
    out: string;
};

const day24_1 = (input: string[]): number => {
    let readingGates = false;
    const wires = new Map<string, number>();
    const gates: Gate[] = [];
    for (const line of input) {
        if (line === '') {
            readingGates = true;
            continue;
        }
        if (readingGates) {
            const [gate, out] = line.split(' -> ');
            const [inA, op, inB] = gate.split(' ');
            gates.push({
                op,
                inA,
                inB,
                out,
            });
        } else {
            const [wire, val] = line.split(': ');
            wires.set(wire, parseInt(val));
        }
    }

    let workingSet: Gate[] = gates;
    while (workingSet.length > 0) {
        let nextSet: Gate[] = [];
        for (const gate of workingSet) {
            if (wires.has(gate.inA) && wires.has(gate.inB)) {
                switch (gate.op) {
                    case 'AND':
                        wires.set(gate.out, wires.get(gate.inA)! & wires.get(gate.inB)!);
                        break;
                    case 'OR':
                        wires.set(gate.out, wires.get(gate.inA)! | wires.get(gate.inB)!);
                        break;
                    case 'XOR':
                        wires.set(gate.out, wires.get(gate.inA)! ^ wires.get(gate.inB)!);
                        break;
                }
            } else {
                nextSet.push(gate);
            }
        }
        workingSet = nextSet;
    }

    const zBits: string[] = [];
    for (const [w, val] of wires) {
        if (w.startsWith('z')) {
            zBits.push(w);
        }
    }
    const zVal: number[] = [];
    for (const zBit of zBits.sort().reverse()) {
        zVal.push(wires.get(zBit)!);
    }

    return parseInt(zVal.join(''), 2);
};

const day24_2 = (input: string[]): number => {
    return 0;
};

export { day24_1, day24_2 };
