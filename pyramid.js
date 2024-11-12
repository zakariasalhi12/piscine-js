function pyramid(str, nb) {
    let res = ""
    for (let i = 1; i <= nb; i++) {
        res += " ".repeat(str.length).repeat(nb - i) + str.repeat(i * 2 - 1) + "\n"
    }
    return res.slice(0 , res.length -1 )
}

console.log(pyramid("{}" , 12))