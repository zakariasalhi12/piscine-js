function isNegative(nb) {
    return nb < 0;
}

function GetIntPart(nb) {
    let intPart = 0;
    if (nb >= 0) {
        while (intPart + 1 <= nb) {
            intPart++;
        }
    } else {
        while (intPart - 1 >= nb) {
            intPart--;
        }
    }
    return intPart;
}

function round(nb) {
    const Myint = GetIntPart(nb);  
    const Fawasil = nb - Myint;    

    if (Fawasil > 0.5 || (Fawasil === 0.5 && !isNegative(nb))) {
        return Myint + 1;
    } else if (Fawasil < -0.5 || (Fawasil === -0.5 && isNegative(nb))) {
        return Myint - 1;
    }
    return Myint;
}

function ceil(nb) {
    const Myint = GetIntPart(nb)
    if (nb > Myint) {
        return Myint + 1;
    }
    return Myint;
}

function floor(nb) {
    const Myint = GetIntPart(nb)
    if (nb < Myint) {
        return Myint - 1;
    }
    return Myint;
}

function trunc(nb) {
    return GetIntPart(nb);  
}

console.log(round(45555.55));  
