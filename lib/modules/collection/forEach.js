import { error } from "../../utils/error.js";
import { getType } from "../util/getType.js";

export function forEach(collection, callback, that) {
    if(getType(collection) !== 'Object' && getType(collection) !== 'Array'){
        error("each函数的第一个参数必须是对象或数组")
    }

    if (getType(collection) === 'Object') {
        const keys = Object.keys(collection)
        for (let i = 0; i < keys.length; i++){
            callback.call(that||this, collection[keys[i]], keys[i], collection)
        }
    } else {
        for (let i = 0; i < collection.length; i++){
            callback.call(that||this, collection[i], i, collection)
        }
    }

    return collection
}