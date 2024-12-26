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
    return 0;
};

export { day22_1, day22_2 };
