function nasa(nb) {
    let res = ""

    for (let i = 1; i <= nb; i++) {
        if (i % 3 === 0  && i % 5 === 0) {
            res += "NASA" + " "
        } else if (i % 3 === 0) {
            res+= "NA" + " "
        }else if (i % 5 === 0) {
            res += "SA" + " "
        } else {
            res += i.toString() + " "
        }
    }
    return res.slice(0 , res.length -1)
}

console.log(nasa(15)); // NASANANASANANA :: NASANANASANANA