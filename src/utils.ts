import { SumDetected } from "./types/sum-detected";

export function detectSums(numbers: number[]): SumDetected[] {
    const results: SumDetected[] = [];
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

export function validateAndConvertInput(input: string): number[] {
    const numbers = input.split(/[,\s]+/).filter(Boolean).map(Number);
    if (numbers.length < 3) {
        throw new Error('Please enter at least 3 numbers');
    }

    if (numbers.some(n => isNaN(n))) {
        throw new Error('Invalid input: Please enter only numbers');
    }

    if (numbers.some(n => n % 1 !== 0)) {
        throw new Error('Invalid input: Please enter integers');
    }

    if (numbers.some(n => n > 100)) {
        throw new Error('Invalid input: Please enter numbers less than or equal to 100');
    }

    return numbers;
}