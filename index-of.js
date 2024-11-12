function indexOf(arr , value , t) {
    if (t === undefined) {
        t = 0
    }
    for (let i = t; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

function lastIndexOf(arr, value, t) {
    if (t === undefined || t >= arr.length) {
        t = arr.length - 1; 
    }
    for (let i = t; i >= 0; i--) {
        if (arr[i] === value) return i; 
    }
    return -1; 
}

function includes(arr , value , t) {
    if (indexOf(arr , value , t) === -1) return false
    return true
}