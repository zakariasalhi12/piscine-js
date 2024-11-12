import { styles } from "./pimp-my-style.data.js"

let counter = 0

export function pimp() {
    var button = document.getElementsByClassName("button")[0]
    if (!button.classList.contains("unpimp")) {
        button.classList.add(styles[counter])
        counter++
    } else {
        counter--
        button.classList.remove(styles[counter])
        if (counter === 0) {
            button.classList.toggle("unpimp")
        }
    }
    if (counter === styles.length) {
        button.classList.toggle("unpimp")
    }
}