/**
 * Checks if `v` is an array.
 *
 * @param {*} v - The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * isArray([1, 2, 3])
 * // => true
 *
 * isArray(document.body.children)
 * // => false
 *
 * isArray('abc')
 * // => false
 *
 * isArray(Function)
 * // => false
 */
export const isArray = (v: any) => Array.isArray(v);
