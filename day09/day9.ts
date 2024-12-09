const expand = (input: string): number[] => {
    const blocks: number[] = [];

    let file = true;
    let fileId = 0;
    for (let i = 0; i < input.length; i++) {
        const length = parseInt(input[i]);
        if (file) {
            for (let j = 0; j < length; j++) {
                blocks.push(fileId);
            }
            fileId++;
        } else {
            for (let j = 0; j < length; j++) {
                blocks.push(-1);
            }
        }
        file = !file;
    }

    return blocks;
};

const day9_1 = (input: string[]): number => {
    const blocks = expand(input[0]);

    for (let i = 0, j = blocks.length - 1; i < j; ) {
        if (blocks[i] >= 0) {
            i++;
            continue;
        }
        if (blocks[j] < 0) {
            j--;
            continue;
        }

        blocks[i] = blocks[j];
        blocks[j] = -1;
        i++;
        j--;
    }

    let checksum = 0;
    for (let i = 0; blocks[i] >= 0; i++) {
        checksum += i * blocks[i];
    }
    return checksum;
};

const day9_2 = (input: string[]): number => {
    const diskMap = input[0].split('').map((x) => parseInt(x));
    const fat = new Map<number, { block: number; size: number }>();
    const empty: { block: number; size: number }[] = [];

    let file = true;
    let fileId = 0;
    let block = 0;
    for (let i = 0; i < diskMap.length; i++) {
        if (file) {
            fat.set(fileId++, { block, size: diskMap[i] });
        } else {
            empty.push({ block, size: diskMap[i] });
        }
        block += diskMap[i];
        file = !file;
    }
    const maxFileId = fileId - 1;

    for (let fileId = maxFileId; fileId > 0; fileId--) {
        const file = fat.get(fileId)!;
        for (let i = 0; i < empty.length && empty[i].block < file.block; i++) {
            if (empty[i].size >= file.size) {
                file.block = empty[i].block;
                empty[i].size -= file.size;
                empty[i].block += file.size;
                break;
            }
        }
    }

    let checksum = 0;
    for (const [fileId, file] of fat) {
        for (let i = 0; i < file.size; i++) {
            checksum += fileId * (file.block + i);
        }
    }
    return checksum;
};

export { day9_1, day9_2 };
