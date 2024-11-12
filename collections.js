function arrToSet(arr) {
    return new Set(arr); // done
}

function arrToStr(arr) {
    return arr.join(""); // done
}

function setToArr(set) {
    return Array.from(set); // done
}

function setToStr(set) {
    return Array.from(set).join(""); // done
}

function strToArr(str) {
    return str.split(""); // done
}

function strToSet(str) {
    return new Set(str.split("")); // done
}

function mapToObj(map) {
    return Object.fromEntries(map) // done
}

function objToArr(obj) {
    return Object.values(obj) // done
}

function objToMap(obj) {
    return new Map(Object.entries(obj)); // done
}

function arrToObj(arr) {
    return Object.assign({} , arr) // done
}

function strToObj(str) {
    return Object.assign({} , strToArr(str)) // done
}

function superTypeOf(any) {
    if (any === null) return "null";
    if (Array.isArray(any)) return "Array";
    if (any instanceof Set) return "Set";
    if (any instanceof Map) return "Map";
    if (any !== undefined && any !== null && typeof any === "object") return "Object"
    if (typeof any === "number" || Number.isNaN(any)) return "Number"
    if (typeof any === "function") return "Function"
    if (typeof any === "string") return "String"
    return typeof any;
}