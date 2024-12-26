const day23_1 = (input: string[]): number => {
    const connections = new Map<string, Set<string>>();
    for (const line of input) {
        let [a, b] = line.split('-');
        if (!connections.has(a)) {
            connections.set(a, new Set<string>());
        }
        if (!connections.has(b)) {
            connections.set(b, new Set<string>());
        }
        connections.get(a)?.add(b);
        connections.get(b)?.add(a);
    }

    const triangles = new Set<string>();
    for (const line of input) {
        let [a, b] = line.split('-');
        for (const c of connections.get(a)!.intersection(connections.get(b)!)) {
            if (a.startsWith('t') || b.startsWith('t') || c.startsWith('t')) {
                triangles.add([a, b, c].sort().join(','));
            }
        }
    }
    return triangles.size;
};

const day23_2 = (input: string[]): string => {
    const subnets: Set<string>[] = [];
    const connections = new Map<string, Set<string>>();
    for (const line of input) {
        let [a, b] = line.split('-');
        subnets.push(new Set([a, b]));
        if (!connections.has(a)) {
            connections.set(a, new Set<string>());
        }
        if (!connections.has(b)) {
            connections.set(b, new Set<string>());
        }
        connections.get(a)?.add(b);
        connections.get(b)?.add(a);
    }

    let addedNew = true;
    while (addedNew) {
        addedNew = false;
        for (const [node, connected] of connections) {
            for (const net of subnets) {
                if (connected.isSupersetOf(net)) {
                    net.add(node);
                    addedNew = true;
                }
            }
        }
    }
    let maxSize = 0;
    let maxSubnet = '';
    for (const net of subnets) {
        if (net.size > maxSize) {
            maxSize = net.size;
            maxSubnet = Array.from(net).sort().join(',');
        }
    }
    return maxSubnet;
};

export { day23_1, day23_2 };
