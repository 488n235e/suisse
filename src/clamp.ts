/**
 * Clamps `n` within the inclusive `l` and `u` bounds.
 *
 * @param {number} n - The number to clamp.
 * @param {number} l The lower bound.
 * @param {number} u The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * clamp(-20, -10, 10)
 * // => -10
 *
 * clamp(20, -10, 10)
 * // => 10
 */
export const clamp = (n: number, l: number, u: number) => {
  return Math.min(Math.max(n, l), u);
};
