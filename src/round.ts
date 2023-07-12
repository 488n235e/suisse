/**
 * Computes `n` rounded to `p`.
 *
 * @param {number} n - The number to round.
 * @param {number} [p=0] - The precision to round to (decimal length).
 * @returns {number} Returns the rounded number.
 * @example
 *
 * round(3.14159)
 * // => 3
 *
 * round(3.14159, 2)
 * // => 3.14
 *
 * round(3.14159, 4)
 * // => 3.1416
 */
export const round = (n: number, p: number = 0) => {
  p = Math.pow(10, p);
  return Math.round(n * p) / p;
};
