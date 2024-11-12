function replica(object, ...objects) {
    objects.forEach((source) => {
        Object.keys(source).forEach((key) => {
            const value = source[key];
             if (value instanceof RegExp) {
                object[key] = new RegExp(value);
            }
             else if (isObject(value)) {
                if (!object.hasOwnProperty(key) || !isObject(object[key])) {
                    object[key] = {};
                }
                replica(object[key], value);
            } else {

                object[key] = value;
            }
        });
    });
    return object;
}
function isObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value) && value !== null;
}