export function detectSums(numbers) {
    const results = [];
    const numMap = new Map();
    const seen = new Set();

    if (!Array.isArray(numbers)) {
        throw new Error('Input is not an array');
    }

    if (numbers.length < 3) {
        return results;
    }

    numbers.forEach((num, idx) => {
        if (!numMap.has(num)) {
            numMap.set(num, []);
        }
        numMap.get(num).push(idx);
    });

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            const sumIndices = numMap.get(sum) || [];

            for (const sumIdx of sumIndices) {
                if (sumIdx !== i && sumIdx !== j) {
                    const key = [i, j, sumIdx].sort().join(',');
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

export function calculateResult(input) {
    const parsedInput = input.split(',').map(i => parseInt(i.trim(), 10));
    let error = null;
    let result = '';

    try {
        result = detectSums(parsedInput);
    } catch (e) {
        error = e.message;
    }

    return {input: parsedInput, result, error};
}