export function generateLetters() {
    const body = document.body
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let fontsize = 10
    for (let i = 0; i < 120; i++) {
        let element = document.createElement("div")
        const letter = alphabet[Math.floor(Math.random() * alphabet.length)]
        element.innerText = letter
        fontsize++
        element.style.fontSize = `${fontsize}px`

        if (i < 40) {
            element.style.fontWeight = 300;
        } else if (i < 80) {
            element.style.fontWeight = 400;
        } else {
            element.style.fontWeight = 600;
        }
        body.appendChild(element)
    }
}
