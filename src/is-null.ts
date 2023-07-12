/**
 * Checks if `v` is `null`.
 *
 * @param {*} v - The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * isNull(null)
 * // => true
 *
 * isNull(undefined)
 * // => false
 *
 * isNull(0)
 * // => false
 */
export const isNull = (v: any) => v === null;
