/**
 * Interpolates linearly `s` to `e` with respect to `f`
 *
 * @param {number} s - The start value. When t is equal to 0, the output of the function is equal to this value.
 * @param {number} e - The end value. When t is equal to 1, the output of the function is equal to this value.
 * @param {number} f - The interpolant.
 * @example
 * lerp(1, 2, 0.5)
 * // => 1.5
 */
export const lerp = (s: number, e: number, f: number) => (e - s) * f + s;
