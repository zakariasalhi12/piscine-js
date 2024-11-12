async function series(arr) {
    var res = []
    for (const element of arr) {
        res.push(await element())
    }
    return res
}