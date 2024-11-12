function filter(arr, fn) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function reject(arr, fn) {
    const res = []
    for (let i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            res.push(arr[i])
        }
    }
    return res
}

function partition(arr, fn) {
    const truthy = []
    const falsy = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            truthy.push(arr[i])
        } else {
            falsy.push(arr[i])
        }
    }
    return [truthy, falsy]
}
