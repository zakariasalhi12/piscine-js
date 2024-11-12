document.addEventListener('mousemove', (e) => {
    moveCircle(e)
});
document.addEventListener('click', (e) => {
    createCircle(e)
});

let mybox
let circles = []
let insidebox = false


function createCircle(e) {
    let x = e.clientX -25
    let y = e.clientY -25
    let circle = document.createElement('div')
    circle.style.position = 'absolute'
    circle.style.left = `${x}px`
    circle.style.top = `${y}px`
    if (insidebox) {
         circle.style.background = 'var(--purple)';
    } else {
        circle.style.background = 'white'

    }
    circle.classList.add('circle')
    document.body.appendChild(circle)
    circles.push(circle)
    insidebox = false
}

function moveCircle(e) {
    if (circles.length === 0) return
    let x = e.clientX -25
    let y = e.clientY -25
    let lastone = circles[circles.length - 1]
    let boxRect = mybox.getBoundingClientRect()

    console.log(boxRect);
    if (insidebox) {
        let constrainedX = Math.max(boxRect.left, Math.min(x, boxRect.right - lastone.offsetWidth))
        let constrainedY = Math.max(boxRect.top, Math.min(y, boxRect.bottom - lastone.offsetHeight))
        lastone.style.background = 'var(--purple)'

        lastone.style.left = `${constrainedX}px`
        lastone.style.top = `${constrainedY}px`
    } else {
        lastone.style.left = `${x}px`
        lastone.style.top = `${y}px`
        if (x >= boxRect.left && x + lastone.offsetWidth <= boxRect.right && y >= boxRect.top && y + lastone.offsetHeight <= boxRect.bottom) {
            insidebox = true
        }
    }
}

function setBox() {
    mybox = document.createElement('div')
    mybox.style.position = 'relative'
    mybox.classList.add('box')
    document.body.appendChild(mybox)
}

export { createCircle, moveCircle, setBox }