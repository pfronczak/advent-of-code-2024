const nextSecret = (secret: number): number => {
    let nextSecret = secret;
    nextSecret = (nextSecret ^ (nextSecret << 6)) & 16777215;
    nextSecret = (nextSecret ^ (nextSecret >> 5)) & 16777215;
    nextSecret = (nextSecret ^ (nextSecret << 11)) & 16777215;
    return nextSecret;
};

const day22_1 = (input: string[]): number => {
    let sum = 0;
    for (const line of input) {
        let secret = parseInt(line);
        for (let i = 0; i < 2000; i++) {
            secret = nextSecret(secret);
        }
        sum += secret;
    }
    return sum;
};

const day22_2 = (input: string[]): number => {
    const seqToPrice = new Map<string, number>();
    for (const line of input) {
        let secret = parseInt(line);
        let seq: number[] = [];
        let prevPrice: number | null = null;
        let seqKeys = new Set<String>();
        for (let i = 0; i < 2000; i++) {
            secret = nextSecret(secret);
            let price = secret % 10;
            if (prevPrice != null) {
                seq.push(price - prevPrice);
            }
            if (seq.length === 4) {
                let seqStr = seq.join(',');
                if (!seqKeys.has(seqStr)) {
                    seqToPrice.set(seqStr, (seqToPrice.get(seqStr) ?? 0) + price);
                }
                seqKeys.add(seqStr);
                seq.shift();
            }
            prevPrice = price;
        }
    }
    let maxPrice = 0;
    for (const [seq, price] of seqToPrice) {
        if (price > maxPrice) {
            maxPrice = price;
        }
    }
    return maxPrice;
};

export { day22_1, day22_2 };
