function cutFirst(str) {
    let res = ""

    for (let i = 2; i < str.length; i++) {
        res += str[i]
    }
    return res
}

function cutLast(str) {
    let res = ""

    for (let i = 0; i < str.length-2; i++) {
        res += str[i]
    }
    return res
}
function cutFirstLast(str) {
    let res = ""

    for (let i = 2; i < str.length-2; i++) {
        res += str[i]
    }
    return res
}

function keepFirst(str) {
    if (str.length === 1) return str
    return str[0] + str[1]
}

function keepLast(str) {
    if (str.length === 1) return str
    return str[str.length-2] + str[str.length - 1]
}
function keepFirstLast(str) {
    if (str.length === 1) return str
    if (str.length >= 4)  return str[0] + str[1]+  str[str.length-2] + str[str.length - 1]
    return str
}


console.log(keepFirstLast("af"));