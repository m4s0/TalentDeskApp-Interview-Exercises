import {SumDetected} from "../types/sum-detected";

// * Time Complexity: O(n² × k) where:
// n is the number of numbers
// k is the average number of valid indexes where numbers[i] + numbers[j] appears
//
// The implementation has these key operations:
//
// - Building the numberToPositions map: O(n)
// - Double nested loops iterating through pairs: O(n²)
// - For each pair (i,j), processing valid sum indices: O(k)
//
// The overall time complexity is O(n + n² × k), which simplifies to O(n² × k).
//
// * Memory Complexity: O(n + r) where n is the number of numbers and r is the number of results
//
// The space usage consists of:
//
// - numberToPositions map: O(n) space to store all values and their indices
// - results array: O(r) space where r is the number of detected sums
// - Temporary arrays for indices: O(n) in worst case
//
// Overall space complexity is O(n + r).
//
// This implementation is optimized for time efficiency by using a map to quickly look up indices where a sum exists,
// avoiding the O(n³) complexity of a naive approach.
export function detectSums(numbers: number[]): SumDetected[] {
    const results: SumDetected[] = [];

    if (numbers.length < 3) {
        return results;
    }

    const numberToPositions = new Map<number, number[]>();
    for (let i = 0; i < numbers.length; i++) {
        const positions = numberToPositions.get(numbers[i]) || [];
        positions.push(i);
        numberToPositions.set(numbers[i], positions);
    }

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            let positions = numberToPositions.get(sum) || [];
            const validSumPositions = positions.filter(pos => pos !== i && pos !== j);

            for (let k = 0; k < validSumPositions.length; k++) {
                results.push({pA: i, pB: j, sum: validSumPositions[k]});
            }
        }
    }

    return results;
}