import { gossips } from "./gossip-grid.data.js"

let body = document.body

let form = document.createElement("form")
let texteria = document.createElement("textarea")
let button = document.createElement("button")
let filterdiv = document.createElement("div")
filterdiv.classList.add("ranges")
texteria.setAttribute("placeholder", "Share gossip!")
button.innerText = "Share gossip!"
form.classList.add("gossip")
body.append(form)
form.append(texteria)
form.append(button)
body.append(filterdiv)

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = texteria.value.trim()
    if (input.length > 0) {
        gossips.unshift(input)
        texteria.value = ""    
        updateGossipGrid()    
    }
})

function updateGossipGrid() {
    document.querySelectorAll('.gossip:not(form)').forEach(gossip => gossip.remove())

    gossips.forEach(gossipText => {
        let div = document.createElement("div")
        div.classList.add("gossip")
        div.innerText = gossipText
        div.style.width = `${document.getElementById("width").value}px`
        div.style.fontSize = `${document.getElementById("fontSize").value}px`
        div.style.backgroundColor = `hsl(278, 70%, ${document.getElementById("background").value}%)`
        body.append(div)
    })
}

function grid() {
    filterdiv.innerHTML = ""

    const ranges = [
        { id: "width", min: 200, max: 800, value: 200 },
        { id: "fontSize", min: 20, max: 40, value: 20 },
        { id: "background", min: 20, max: 75, value: 50 }
    ]

    ranges.forEach(range => {
        let filter = document.createElement("input")
        filter.setAttribute("type", "range")
        filter.setAttribute("id", range.id)
        filter.setAttribute("min", range.min)
        filter.setAttribute("max", range.max)
        filter.setAttribute("value", range.value)
        filter.addEventListener("input", updateGossipGrid)
        filterdiv.append(filter)
    })

    updateGossipGrid()
}

export { grid }
