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