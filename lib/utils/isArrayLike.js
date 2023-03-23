/**
 * 判断是否是类数组对象
 * @param {Object} target 
 * @returns 
 */
export function isArrayLike(target) {
  return typeof target === "object" && target !== null && "length" in target;
}
