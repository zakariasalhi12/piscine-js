function join(arr , sep) {
    let res = ""
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length-1) {
            return res + arr[i] 
        }
        res += arr[i] + sep
    }
}

function split(str, sep) {
    let res = []
    let temp = ''
    let sepIndex = 0
  

    if (sep.length === 0) {
        for (let index = 0; index < str.length; index++) {
            res.push(str[index])
        }
        return res
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === sep[sepIndex]) {
            sepIndex++
            if (sepIndex === sep.length) {
                res.push(temp)
                temp = ''
                sepIndex = 0
            }
        } else {
            if (sepIndex > 0) {
                temp += sep.slice(0, sepIndex)
                sepIndex = 0
            }
            temp += str[i]
        }
    }
  
    res.push(temp)
  
    return res
}