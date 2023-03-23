export function has(obj, key) {
    return obj != null && Object.hasOwnProperty.call(obj, key)
}
