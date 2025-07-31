import {detectSums} from "./detect-sums";

describe('detectSums', () => {
    it('should return an array', () => {
        const result = detectSums([]);
        expect(result).toBeInstanceOf(Array);
    });

    it('should detect sums', () => {
        const result = detectSums([1, 2]);
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(0);
    });

    it('should detect sums in order', () => {
        const result = detectSums([1, 2, 3]);
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(1);
        expect(result).toContainEqual({pA: 0, pB: 1, sum: 2});
    });

    it('handles basic case [1,2,3]', () => {
        expect(detectSums([1, 2, 3])).toEqual([
            {pA: 0, pB: 1, sum: 2}
        ]);
    });

    it('handles empty array returns empty result', () => {
        expect(detectSums([])).toEqual([]);
    });

    it('handles no valid combinations returns empty array', () => {
        expect(detectSums([1, 2, 4])).toEqual([]);
        expect(detectSums([3, 0, 2])).toEqual([]);
    });

    it('handles duplicate numbers correctly', () => {
        expect(detectSums([1, 2, 1, 3])).toEqual([
            {pA: 0, pB: 1, sum: 3},
            {pA: 0, pB: 2, sum: 1},
            {pA: 1, pB: 2, sum: 3}
        ]);
    });

    it('should return correct results for basic input', () => {
        expect(detectSums([1, 2, 3])).toEqual([{pA: 0, pB: 1, sum: 2}]);
    });

    it('should return empty array for invalid inputs', () => {
        expect(detectSums([])).toEqual([]);
        expect(detectSums([1, 2])).toEqual([]);
    });

    it('should handle arrays with multiple valid sums', () => {
        expect(detectSums([1, 2, 3, 4])).toEqual([
            {pA: 0, pB: 1, sum: 2},
            {pA: 0, pB: 2, sum: 3}
        ]);

        expect(detectSums([3, 0, 3])).toEqual([
            {pA: 0, pB: 1, sum: 2},
            {pA: 1, pB: 2, sum: 0}
        ]);

        expect(detectSums([1, 2, 3, 4, 5])).toEqual([
            {pA: 0, pB: 1, sum: 2},
            {pA: 0, pB: 2, sum: 3},
            {pA: 0, pB: 3, sum: 4},
            {pA: 1, pB: 2, sum: 4}
        ]);

        expect(detectSums([1, 2, 1, 3])).toEqual([
            {pA: 0, pB: 1, sum: 3},
            {pA: 0, pB: 2, sum: 1},
            {pA: 1, pB: 2, sum: 3}
        ]);

        expect(detectSums([1, 2, 1, 2, 3])).toEqual([
            {pA: 0, pB: 1, sum: 4},
            {pA: 0, pB: 2, sum: 1},
            {pA: 0, pB: 2, sum: 3},
            {pA: 0, pB: 3, sum: 4},
            {pA: 1, pB: 2, sum: 4},
            {pA: 2, pB: 3, sum: 4}
        ]);
    });

    it('should not reuse the same index in different roles (case 1)', () => {
        expect(detectSums([1, 2, 4])).toEqual([]);
    });

    it('should not reuse the same index in different roles (case 2)', () => {
        expect(detectSums([3, 0, 2])).toEqual([]);
    });

    it('handles negative numbers', () => {
        expect(detectSums([-1, -2, -3])).toEqual([
            {pA: 0, pB: 1, sum: 2}
        ]);

        expect(detectSums([-5, 3, -2, -4])).toEqual([
            {pA: 0, pB: 1, sum: 2}
        ]);
    });

    it('handles mixed positive and negative numbers', () => {
        expect(detectSums([-1, 2, 1])).toEqual([
            {pA: 0, pB: 1, sum: 2}
        ]);

        expect(detectSums([-3, 1, -2, -1])).toEqual([
            {pA: 0, pB: 1, sum: 2},
            {pA: 1, pB: 2, sum: 3},
            {pA: 2, pB: 3, sum: 0}
        ]);
    });

    it('handles arrays with multiple zeros', () => {
        expect(detectSums([0, 0, 0])).toEqual([
            {pA: 0, pB: 1, sum: 2},
            {pA: 0, pB: 2, sum: 1},
            {pA: 1, pB: 2, sum: 0}
        ]);

        expect(detectSums([5, 0, 0, 5])).toEqual([
            {pA: 0, pB: 1, sum: 3},
            {pA: 0, pB: 2, sum: 3},
            {pA: 1, pB: 3, sum: 0},
            {pA: 2, pB: 3, sum: 0}
        ]);
    });

    it('handles single element array', () => {
        expect(detectSums([5])).toEqual([]);
    });

    it('handles large numbers', () => {
        expect(detectSums([1000000, 2000000, 3000000])).toEqual([
            {pA: 0, pB: 1, sum: 2}
        ]);
    });

    it('handles complex cases with multiple valid sums', () => {
        expect(detectSums([5, 3, 2, 8, 5])).toEqual([
            {pA: 0, pB: 1, sum: 3},
            {pA: 1, pB: 2, sum: 0},
            {pA: 1, pB: 2, sum: 4},
            {pA: 1, pB: 4, sum: 3}
        ]);
    });

    it('handles decimal numbers', () => {
        expect(detectSums([1.5, 2.5, 4])).toEqual([
            {pA: 0, pB: 1, sum: 2}
        ]);
    });

    it('handles edge case where sum is zero', () => {
        expect(detectSums([-5, 5, 0, 10])).toEqual([
            {pA: 0, pB: 1, sum: 2},
            {pA: 0, pB: 3, sum: 1}
        ]);
    });
});