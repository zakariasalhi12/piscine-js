function letterSpaceNumber(str) {
    let arr = str.split(' ')
    let NewArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replace("," , ".")
        if (Number(arr[i]) > 0 && Number(arr[i]) < 10 ) {
            console.log(arr[i]);
            NewArr.push(`${arr[i-1].charAt(arr[i-1].length -1)} ${Number(arr[i])}`)
        }
    }
    return NewArr
}
