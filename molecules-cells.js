function Converter(str , type) {
    let DnaArr = ['G' , 'C' , 'T' , 'A']
    let RnaArr = ['C' , 'G' , 'A' , 'U']
    let res = ""

    if (type === "DNA") {
        for (let i = 0; i < str.length; i++) {
            if (DnaArr.includes(str[i].toUpperCase())) {
                res += RnaArr[DnaArr.indexOf(str[i].toUpperCase())]
            }
        }
    }

    if (type === "RNA") {
        for (let i = 0; i < str.length; i++) {
            if (RnaArr.includes(str[i].toUpperCase())) {
                res += DnaArr[RnaArr.indexOf(str[i].toUpperCase())]
            }
        }
    }
    return res
}

function RNA(str) {
    return Converter(str , "DNA")
}

function DNA(str) {
    return Converter(str , "RNA")

}

console.log(RNA("TAGC")); // AUCG