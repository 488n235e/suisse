/**
 * Remaps `n` from `x1`-`x2` range to `y1`-`y2` range.
 *
 * @param {number} n - The number to remap.
 * @param {number} x1 - The lower bound of the range to map from.
 * @param {number} y1 - The upper bound of the range to map from.
 * @param {number} x2 - The lower bound of the range to map to.
 * @param {number} y2 - The upper bound of the range to map to.
 * @returns {number} Returns the mapped number.
 * @example
 * remap(5, 0, 10, 10, 20)
 * // => 15
 *
 * remap(0, -30, 10, 20, 40)
 * // => 35
 */
export const remap = (
  n: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) => ((n - x1) * (y2 - x2)) / (y1 - x1) + x2;
