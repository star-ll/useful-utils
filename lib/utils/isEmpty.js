import { getType } from "../modules/util/getType.js";

/**
 * 
 * @param {*} target 
 * @param {Object} context 
 * @param {boolean}  content.includeSymbol
 * @returns 
 */
export function isEmpty(target, context = {}) {
  const type = getType(target);

  if (type === "Null" || type === "Undefined") {
    return true;
  }

  if (type === "Object") {
    if (context.includeSymbol) {
      return (
        Object.keys(target).length +
          Object.getOwnPropertySymbols(target).length ===
        0
      );
    }

    return Object.keys(target).length === 0;
  }
  if (type === "Array") {
    return target.length === 0;
  }

  return false;
}
