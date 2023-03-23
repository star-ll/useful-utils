import { forEach } from "./forEach.js";

export function filter(collection, callback) {
    const result = []
    
    forEach(collection, (value,index,collection) => {
        if (callback(value, index, collection)) {
            result.push(value)
        }
    })

    return result
}