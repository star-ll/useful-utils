export function debounce(callback, wait, immediate) {
    let previousTime = 0
    let timeout

    function fn(...args) {
        return callback.call(this, ...args)
    }

    function debounced(...args) {
        const that = this;

        const currentTime = Date.now()
        if (currentTime - previousTime < wait) {
            return
        } 
        timeout = setTimeout(ok, wait)
        lastCallTime = currentTime
        return fn.call(that, ...args)
    }

    return debounced
}