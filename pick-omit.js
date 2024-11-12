function pick(obj, key) {
    let res = {};
    let isArray = Array.isArray(key);

    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (isArray) {
            if (key.indexOf(Object.keys(obj)[i]) !== -1) {
                res[Object.keys(obj)[i]] = obj[Object.keys(obj)[i]];
            }
        } else {
            if (Object.keys(obj)[i] === key) {
                res[Object.keys(obj)[i]] = obj[Object.keys(obj)[i]];
            }
        }
    }
    return res;
}

function omit(obj, key) {
    let res = {};
    let arr = Array.isArray(key);
    for (let i = 0; i < Object.keys(obj).length; i++) {
        if (arr) {
            if (key.indexOf(Object.keys(obj)[i]) !== -1) {
                continue;
            }
        } else {
            if (Object.keys(obj)[i] === key) {
                continue;
            }
        }
        res[Object.keys(obj)[i]] = obj[Object.keys(obj)[i]];
    }
    return res;
}
