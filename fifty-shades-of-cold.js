import { colors } from "./fifty-shades-of-cold.data.js"

function generateClasses() {
    const head = document.head
    const style = document.createElement("style")
    colors.forEach((color) => {
        style.innerHTML += `.${color} {\n  background: ${color};\n }\n\n`
    })
    head.appendChild(style)
}

function generateColdShades() {
    const coldKeywords = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]
    const body = document.body
    
    colors.forEach((color) => {
        if (coldKeywords.some(keyword => color.includes(keyword))) {
            const div = document.createElement("div");
            div.classList.add(color)
            div.innerHTML = color
            div.addEventListener("click", () => choseShade(color))
            body.appendChild(div)
        }
    })
}

function choseShade(shade) {
    document.querySelectorAll("div").forEach((div) => {
        div.className = shade
    })
}

export { generateClasses, generateColdShades, choseShade }
