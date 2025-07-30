import { detectSums } from './utils';

describe('Detect sums', () => {
  it('should fail if input is not an array', () => {
    expect(() => detectSums()).toThrow('Input is not an array');
  });

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
});