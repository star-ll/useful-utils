export function wait(callback, timer = 100) {
    return async function (...args) {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, timer)
        })

        return callback(...args)
    }
}