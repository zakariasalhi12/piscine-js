function filterKeys(obj, func) {
    const newObj = {}
    for (let [key, val] of Object.entries(obj)) {
        if (func(key)) {
            newObj[key] = val;
        }
    }
    return newObj
}

function mapKeys(obj, func) {
    const newObj = {};
    for (let [key, val] of Object.entries(obj)) {
        newObj[func(key)] = val
    }
    return newObj
}

function reduceKeys(obj, func, accumulator) {
    let first = false;
    if (accumulator === undefined) {
        first = true
    }
    for (let [key] of Object.entries(obj)) {
        if (first) {
            accumulator=  key
            first = false;
            continue
        }
        accumulator = func(accumulator, key)
    }
    return accumulator
}