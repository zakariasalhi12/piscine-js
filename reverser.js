function reverse(value) {
    let res
    if (Array.isArray(value)) {
        res = []
        for (let index = value.length-1; index >= 0; index--) {
            res.push(value[index])
        }
    } else if (typeof value === "string") {
        res = ""
        for (let index = value.length-1; index >= 0; index--) {
            res += value[index]
        }
    }
    return res
}
