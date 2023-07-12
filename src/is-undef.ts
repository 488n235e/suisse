/**
 * Checks if `v` is undefined.
 *
 * @param {*} v - The value to check.
 * @returns {boolean} Returns `true` if `value` is undefined, else `false`.
 * @example
 *
 * isUndef(undefined)
 * // => true
 *
 * isUndef(null)
 * // => false
 *
 * isUndef(false)
 * // => false
 */
export const isUndef = (v: any) => v === undefined;
