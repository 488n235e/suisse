/**
 * Checks if `v` is `null` or `undefined`.
 *
 * @param {*} v - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * isNil(null)
 * // => true
 *
 * isNil(undefined)
 * // => true
 *
 * isNil(0)
 * // => false
 */
export const isNil = (v: any) => v == null;
