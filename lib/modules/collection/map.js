import {forEach, getType} from "../index.js"

/**
 * 
 * @param {Object | Array} collection 
 * @param {Function} callback 
 * @returns 
 */
export function map(collection, callback) {
    const result = getType(collection) === 'Array' ? [] : {};

    forEach(collection, (value, index, collection) => {
        result[index] = callback(value, index, collection)
    })

    return result
}