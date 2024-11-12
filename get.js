function get(src , path) {
    let SplitedPath = path.split(".")
    let res = src
    
    for (let i = 0; i < SplitedPath.length; i++) {
        if(res[`${SplitedPath[i]}`] === undefined) return undefined
        res = res[`${SplitedPath[i]}`]
    }

    return res
}