export function getArchitects() {
    return [document.querySelectorAll("a") , document.querySelectorAll("span")]
}

export function getClassical() {
    let [architects] = getArchitects()
    let classical = []
    let non_classical = []
    architects.forEach(element => {
        if (element.classList.contains('classical')) {
            classical.push(element)
        }else {
            non_classical.push(element)
        }
    });
    return [classical , non_classical]
}

export function getActive() {
    let active = []
    let non_active = []
    let [classical] = getClassical()
    classical.forEach(element => {
        if (element.classList.contains("active")) {
            active.push(element)
        } else {
            non_active.push(element)
        }
    });
    return [active , non_active]
}

export function getBonannoPisano() {
    return [document.getElementById("BonannoPisano") , getActive()[0].filter((elem) => elem.id !== "BonannoPisano")]
}
