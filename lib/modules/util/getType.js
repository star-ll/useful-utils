export function getType(target) {
    return Object.prototype.toString.call(target).slice(8,-1)
}