const readInput = (input: string[]) => {
    const ordering: Map<number, number[]> = new Map();
    const updates: number[][] = [];
    let readOrder = true;
    for (const line of input) {
        if (line === '') {
            readOrder = false;
            continue;
        }
        if (readOrder) {
            const [a, b] = line.split('|').map((x) => parseInt(x));
            if (ordering.has(a)) {
                ordering.get(a)!.push(b);
            } else {
                ordering.set(a, [b]);
            }
        } else {
            updates.push(line.split(',').map((x) => parseInt(x)));
        }
    }
    return { ordering, updates };
};

const checkOrder = (
    pages: number[],
    ordering: Map<number, number[]>,
): boolean => {
    let previousPages: Set<number> = new Set();
    for (let i = 0; i < pages.length; i++) {
        for (const page of ordering.get(pages[i]) ?? []) {
            if (previousPages.has(page)) {
                return false;
            }
        }
        previousPages.add(pages[i]);
    }
    return true;
};

const day5_1 = (input: string[]): number => {
    const { ordering, updates } = readInput(input);
    let sum = 0;
    for (const update of updates) {
        if (checkOrder(update, ordering)) {
            sum += update[Math.floor(update.length / 2)];
        }
    }
    return sum;
};

const pickCandidate = (
    pages: Set<number>,
    ordering: Map<number, number[]>,
): number => {
    for (const page of pages) {
        const otherPages = new Set(pages);
        otherPages.delete(page);
        let valid = true;
        for (const nextPage of ordering.get(page) ?? []) {
            if (otherPages.has(nextPage)) {
                valid = false;
                break;
            }
        }
        if (valid) {
            return page;
        }
    }
    return -1;
};

const day5_2 = (input: string[]): number => {
    const { ordering, updates } = readInput(input);
    let sum = 0;
    for (const update of updates) {
        if (!checkOrder(update, ordering)) {
            let pagesInOrder: number[] = [];
            let pagesLeft = new Set(update);
            while (pagesLeft.size > 0) {
                const nextPage = pickCandidate(pagesLeft, ordering);
                pagesInOrder.push(nextPage);
                pagesLeft.delete(nextPage);
            }
            pagesInOrder.reverse();

            sum += pagesInOrder[Math.floor(pagesInOrder.length / 2)];
        }
    }
    return sum;
};

export { day5_1, day5_2 };
