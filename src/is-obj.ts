/**
 * Checks if `v` is an Object.
 *
 * @param {*} v - The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObj({})
 * // => true
 *
 * isObj([1, 2, 3])
 * // => false
 *
 * isObj(() => {})
 * // => false
 */
export const isObj = (v: any) => v != null && typeof v === 'object';
