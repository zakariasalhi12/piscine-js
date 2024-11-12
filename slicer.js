function slice(st, a, b) {
    if (a === undefined && b === undefined) return st
    return Adder(st, a , b)

}
function Adder(st, a, b) {
    let res;

    if (b === undefined) {
        b = st.length
    }

    if (b < 0) {
        b = st.length + b
    }
    if (typeof st === 'string') {
        res = ""
    } else if (Array.isArray(st)) {
        res = []
    }

    if (a < 0) {
        for (let i = st.length + a; i < b; i++) {
            if (typeof st === 'string') {
                res += st[i]
            } else {
                res.push(st[i])
            }
        }
        return res
    }

    for (let i = a; i < b; i++) {
        if (typeof st === 'string') {
            res += st[i]
        } else {
            res.push(st[i])
        }
    }

    return res
}
