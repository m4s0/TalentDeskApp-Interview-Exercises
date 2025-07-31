import {SumDetected} from "../types/sum-detected";

// * Time Complexity: O(n³) where n is the number of numbers
//
// The time complexity breaks down as follows:
//
// - First outer loop (i): O(n)
// - Second nested loop (j): O(n)
// - For each pair (i,j):
//      - numbers.includes(sum): O(n)
//      - Third nested loop (k) to find valid sum indices: O(n)
//      - Loop through sumIndexes: O(p) where p ≤ n
//
// Overall time complexity: O(n²) × O(n) = O(n³)
//
// * Memory Complexity: O(n + r) where n is the number of numbers and r is the number of results
//
// - results array: O(r) where r is the number of valid triplets found
// - sumIndexes temporary array: O(n) in worst case
//
// The implementation uses a straightforward approach with triple nested loops, which results in cubic time complexity
// but uses minimal extra space beyond the output array.
export function detectSums(numbers: number[]): SumDetected[] {
    const results: SumDetected[] = [];

    if (numbers.length < 3) {
        return results;
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];

            if (numbers.includes(sum)) {
                const sumIndexes: number[] = [];

                for (let k = 0; k < numbers.length; k++) {
                    if (numbers[k] === sum && k !== i && k !== j) {
                        sumIndexes.push(k);
                    }
                }

                for (let k = 0; k < sumIndexes.length; k++) {
                    results.push({pA: i, pB: j, sum: sumIndexes[k]});
                }
            }
        }
    }

    return results;
}
