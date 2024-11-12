function adder(arr , number = 0) {
    return arr.reduce((acc, current) => acc + current , number);
}

function sumOrMul(arr, initialValue = 0) {
    return arr.reduce((acc, current) => {
        if (current % 2 === 0) {
            return acc * current;
        }
        return acc + current;
}, initialValue)
}
function funcExec(functions , adder = 0) {
    return functions.reduce((accumulator, currentFunc) => {
        return currentFunc(accumulator);
    }, adder);
}
