function throttle(func, delay) {
    let wait = false

    return function(...args) {
        if (wait) return
        wait = true
        func(...args)
        setTimeout(()=>{
            wait = false
        },delay)
    }
}

function opThrottle(func, delay, option = {trailing:false ,leading:false } ) {
    let wait = false
    return function(...args) {
        if (wait) return
        wait = true
        if (option.leading) {
            func(...args)
        }
        setTimeout(()=> {
            if (option.trailing && !option.leading) {
                func(...args)
            }
            wait = false
        },delay)
    }
}
