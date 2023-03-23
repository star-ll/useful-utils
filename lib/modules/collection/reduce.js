import { getType } from "../util/getType.js";

/**
 *
 * 原生JavaScript reduce函数
 *
 * @param {Array | Object} collection
 * @param {Function} callback
 * @param {*} [initialValue]
 * @returns {*}
 */
export function reduce(collection, callback, initialValue) {
  let result = initialValue;
  const keys = Object.keys(collection);
  const len = keys.length;
  const isArray = getType(collection) === "Array";

  if (result == null) {
    result = collection[keys[0]];
  }

  for (let i = initialValue == null ? 1 : 0; i < len; i++) {
    let key = keys[i]; // index or key
    if (isArray) {
      key = Number(key);
    }

    const current = collection[key];

    result = callback(result, current, key);
  }

  return result;
}
