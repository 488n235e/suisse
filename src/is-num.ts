/**
 * Checks if `v` is as a `Number`.
 *
 * @param {*} v - The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * isNum(3)
 * // => true
 *
 * isNum(Infinity)
 * // => true
 *
 * isNum('3')
 * // => false
 */
export const isNum = (v: any) => typeof v === 'number';
