export function error(message, cause) {
    const context = {}
    if (cause) {
        context.cause = cause
    }
    
    throw new Error(message, context)
}