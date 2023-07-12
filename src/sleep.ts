/**
 * Pauses the execution of code for `ms`
 * @async
 * @param {number} ms - The sleep duration in milliseconds.
 */
export const sleep: (ms: number) => Promise<void> = (ms: number) =>
  new Promise(r => setTimeout(r, ms));
