const colors = {
    a: "#FF5733", // Red
    b: "#33FF57", // Green
    c: "#3357FF", // Blue
    d: "#FF33A1", // Pink
    e: "#33FFF1", // Cyan
    f: "#FFC300", // Yellow
    g: "#DAF7A6", // Light Green
    h: "#FF33F6", // Magenta
    i: "#FF8433", // Orange
    j: "#A233FF", // Purple
    k: "#33A1FF", // Sky Blue
    l: "#FF8C33", // Light Orange
    m: "#85E3FF", // Light Cyan
    n: "#33FF8C", // Light Greenish
    o: "#FF3353", // Light Red
    p: "#C70039", // Dark Pink
    q: "#900C3F", // Dark Purple
    r: "#581845", // Dark Red
    s: "#FFC0CB", // Light Pink
    t: "#D3D3D3", // Light Gray
    u: "#FFD700", // Gold
    v: "#800080", // Purple
    w: "#008080", // Teal
    x: "#FF4500", // Orange Red
    y: "#FFFF00", // Yellow
    z: "#00FF00"  // Lime Green
};


function compose() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    document.body.addEventListener("keydown" , (key) => {
        if (key.key === "Escape") {
            document.querySelectorAll(".note").forEach(element => {
                element.remove()
            });
        } else if (key.key === "Backspace") {
            document.querySelectorAll(".note")[document.querySelectorAll(".note").length -1].remove()
        } else if (alphabet.indexOf(key.key) !== -1) {
            let div = document.createElement("div")
            div.classList.add("note")
            div.innerText = key.key
            div.style.backgroundColor = colors[key.key]
            document.body.appendChild(div)
        }

    })
}

export {compose}