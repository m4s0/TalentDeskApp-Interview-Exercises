type DetectSum = { pA: number, pB: number, sum: number };

type CalculateResult = {
    input: number[];
    result: DetectSum[];
    error: string | null;
}

export function detectSums(numbers: number[]): DetectSum[] {
    const results: DetectSum[] = [];
    const numMap = new Map<number, number[]>();
    const seen = new Set<string>();

    if (!Array.isArray(numbers)) {
        throw new Error('Input is not an array');
    }

    if (numbers.length < 3) {
        return results;
    }

    numbers.forEach((num: number, idx: number) => {
        if (!numMap.has(num)) {
            numMap.set(num, []);
        }
        numMap.get(num)!.push(idx);
    });

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum: number = numbers[i] + numbers[j];
            const sumIndices: number[] = numMap.get(sum) || [];

            for (const sumIdx of sumIndices) {
                if (sumIdx !== i && sumIdx !== j) {
                    const key: string = [i, j, sumIdx].sort().join(',');
                    if (!seen.has(key)) {
                        results.push({pA: i, pB: j, sum: sumIdx});
                        seen.add(key);
                    }
                }
            }
        }
    }

    return results;
}

export function calculateResult(input: string): CalculateResult {
    const parsedInput: number[] = input.split(',').map(i => parseInt(i.trim(), 10));
    let error: string | null = null;
    let result: DetectSum[] = [];

    try {
        result = detectSums(parsedInput);
    } catch (e) {
        error = e instanceof Error ? e.message : 'An unknown error occurred';
    }

    return {input: parsedInput, result, error};
}