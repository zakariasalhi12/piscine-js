function multiply(a , b) {
    let newb = Math.abs(b)
    let newa = Math.abs(a)
    let res = 0
    for (let index = 0 ; index < newb ; index++) {
        res += newa
    }

    if (a < 0 && b < 0) return res
    if ((a < 0) || (b < 0))  return -res
    return res
}

function divide(a , b) {
    if (b === 0) return new Error("Cant divide by 0")

    let newa = Math.abs(a)
    let newb = Math.abs(b)
    let res = 0

    while (newa > 0 && newa >= newb) {
        newa = newa - newb
        res ++
    }

    if (a < 0 && b < 0) return res
    if ((a < 0) || (b < 0))  return -res

    return res

}

function modulo(a , b) {
   
    if (b === 0) return new Error("Cant divide by 0")

        let newa = Math.abs(a)
        let newb = Math.abs(b)
        let res = 0
    
        while (newa > 0 && newa >= newb) {
            newa = newa - newb
            res ++
        }
    
        if (a < 0) return -newa
        return newa
    
}

