import {SumDetected} from "../types/sum-detected";

// * Time Complexity: O(n³) where n is the number of numbers
//
// The detectSums function has three nested loops:
//
// - Outer loop over i from 0 to n-1: O(n)
// - Middle loop over j from i+1 to n-1: O(n)
// - Inner loop over k from 0 to n-1: O(n)
// - These three nested loops result in a cubic time complexity of O(n³), where n is the length of the input array.
//
// * Memory Complexity: O(r) where r is the number of results
//
// - The only significant space usage is the results array
// - In worst case, this could be O(n²) if many pairs have their sum in the array
// - No additional data structures are used
//
// This implementation prioritizes memory efficiency over time efficiency, as it doesn't use additional data structures
// to speed up the lookup process.
export function detectSums(numbers: number[]): SumDetected[] {
    const results: SumDetected[] = [];

    if (numbers.length < 3) {
        return results;
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];

            for (let k = 0; k < numbers.length; k++) {
                if (k === i || k === j) continue;

                if (k !== i && k !== j && numbers[k] === sum) {
                    results.push({pA: i, pB: j, sum: k});
                }
            }
        }
    }

    return results;
}
