function map(arr, fn) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i, arr))
    }
    return result
}

function flatMap(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const mappedValue = fn(arr[i], i, arr)
        if (Array.isArray(mappedValue)) {
            result.push(...mappedValue)
        } else {
            result.push(mappedValue)
        }
    }
    return result
}