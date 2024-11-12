function retry(count, cb) {
    return async function (...args) {
        try {
            return await cb(...args)
        } catch (error) {
            if (count > 0) {
                return retry(count - 1, cb)(...args)
            } else {
                throw error
            }
        }
    }
}

function timeout(delay, callback) {
    return async function(...args) {
        const timer = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), delay)
        )
        const operation = callback(...args)
        return await Promise.race([operation, timer])
    };
}