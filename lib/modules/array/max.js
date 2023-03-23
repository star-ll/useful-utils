/**
 *
 * @param {Array} array
 * @param {number} start
 * @param {number} end
 * @returns {Number}
 */
export function max(array, start = 0, end = array.length - 1) {
  const target = array.slice(start, end + 1);
  return target.reduce((a, b) => (a > b ? a : b), -Infinity);
}
