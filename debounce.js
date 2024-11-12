function debounce(func, timer = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), timer);
    };
}

function opDebounce(func, timer = 100, option = {}) {
    let timeout;
    return function (...args) {
        if (timeout) clearTimeout(timeout);

        if (option?.leading && !timeout) {
            func.apply(this, args);
        }
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, timer);
    };
}
