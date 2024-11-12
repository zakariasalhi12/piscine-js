function invert(obj) {
    const invertedObj = {};
    
    Object.keys(obj).forEach(key => {
        invertedObj[obj[key]] = key;
    });
    
    return invertedObj;
}
