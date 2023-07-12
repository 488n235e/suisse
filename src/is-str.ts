/**
 * Checks if `v` is a string.
 *
 * @param {*} v - The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * isStr('abc')
 * // => true
 *
 * isStr(1)
 * // => false
 */
export const isStr = (v: any) => typeof v === 'string';
