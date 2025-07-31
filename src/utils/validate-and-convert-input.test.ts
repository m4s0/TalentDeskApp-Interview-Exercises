import {validateAndConvertInput} from './validate-and-convert-input';

describe('validateAndConvertInput', () => {
    test('converts valid string input to number array', () => {
        expect(validateAndConvertInput('1, 2, 3')).toEqual([1, 2, 3]);
        expect(validateAndConvertInput('1,2,3')).toEqual([1, 2, 3]);
        expect(validateAndConvertInput('1 2 3')).toEqual([1, 2, 3]);
    });

    test('throws error if less than 3 numbers provided', () => {
        expect(() => validateAndConvertInput('1, 2')).toThrow('Please enter at least 3 numbers');
        expect(() => validateAndConvertInput('1')).toThrow('Please enter at least 3 numbers');
        expect(() => validateAndConvertInput('')).toThrow('Please enter at least 3 numbers');
    });

    test('throws error for non-numeric input', () => {
        expect(() => validateAndConvertInput('1, a, 3')).toThrow('Invalid input: Please enter only numbers');
        expect(() => validateAndConvertInput('1, #, 3')).toThrow('Invalid input: Please enter only numbers');
        expect(() => validateAndConvertInput('one, 2, three')).toThrow('Invalid input: Please enter only numbers');
    });

    test('throws error for non-integer numbers', () => {
        expect(() => validateAndConvertInput('1.5, 2, 3')).toThrow('Invalid input: Please enter integers');
        expect(() => validateAndConvertInput('1, 2.7, 3')).toThrow('Invalid input: Please enter integers');
    });

    test('handles various spacing and delimiter patterns', () => {
        expect(validateAndConvertInput('1,2,3')).toEqual([1, 2, 3]);
        expect(validateAndConvertInput('1, 2, 3')).toEqual([1, 2, 3]);
        expect(validateAndConvertInput('1   2   3')).toEqual([1, 2, 3]);
        expect(validateAndConvertInput('1,    2,    3')).toEqual([1, 2, 3]);
    });

    test('handles larger valid inputs', () => {
        expect(validateAndConvertInput('1, 2, 3, 4, 5')).toEqual([1, 2, 3, 4, 5]);
        expect(validateAndConvertInput('10, 20, 30, 40, 50')).toEqual([10, 20, 30, 40, 50]);
    });
});
