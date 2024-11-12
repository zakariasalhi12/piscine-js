function interpolation({ step, start, end, callback, duration }) {
    let current = start
    let i = 1
    let wait = setInterval(()=> {
        if (i <= step) {
            let x = current 
            let y = (duration / step) * i
            callback([x , y])
            current += (end - start) / step
            i++
        } else {
            clearInterval(wait)
        }
    } , duration / step)
}