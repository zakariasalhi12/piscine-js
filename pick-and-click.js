let x = 0;
let y = 0;
let height = 0;
let width = 0;

document.addEventListener('click', (event) => {
    event.preventDefault();
    document.execCommand('copy');
})

document.addEventListener('copy', (event) => {
    event.preventDefault();
    const hsl = calculateHsl(x, y, height, width)
    event.clipboardData.setData('text/plain', hsl)
})

document.addEventListener('mousemove', (event) => {
    height = window.innerHeight;
    width = window.innerWidth;
    x = event.clientX;
    y = event.clientY;
    var lines = document.getElementsByTagName('line')
    const yLine = lines[0];
    const xLine = lines[1];
    const hslDiv = document.getElementsByClassName('hsl')[0]
    const hueDiv = document.getElementsByClassName('hue')[0]
    const luminosityDiv = document.getElementsByClassName('luminosity')[0]


    xLine.setAttributeNS(null,'x1', 0);
    xLine.setAttributeNS(null,'x2', width);
    xLine.setAttributeNS(null,'y1', y);
    xLine.setAttributeNS(null,'y2', y);

    yLine.setAttributeNS(null,'y1', 0)
    yLine.setAttributeNS(null,"y2", height);
    yLine.setAttributeNS(null,'x1', x);
    yLine.setAttributeNS(null,"x2", x);

    const hsl = calculateHsl(x, y, height, width)

    document.body.style.background = hsl
    hslDiv.innerText = hsl
    hueDiv.innerText = `${hsl.match(/\d+/g)[0]}`
    luminosityDiv.innerText = `${hsl.match(/\d+/g)[2]}`

})
function pick() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    document.body.appendChild(svg);
    const xLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    xLine.setAttribute('id', 'axisX')
    xLine.setAttribute('x1', 0);
    xLine.setAttribute('y1', 0);
    xLine.setAttribute('x2', 0);
    xLine.setAttribute('y2', 0);

  
    svg.appendChild(xLine);

    const yLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    yLine.setAttribute('id', 'axisY')
    yLine.setAttribute('x1', 0);
    yLine.setAttribute('y1', 0)
    yLine.setAttribute("x2", 0);
    yLine.setAttribute("y2", 0);
    svg.appendChild(yLine);

    const hslDiv = document.createElement('div');
    hslDiv.classList.add('hsl');
    document.body.appendChild(hslDiv);

    const hueDiv = document.createElement('div')
    hueDiv.classList.add('hue', 'text');
    document.body.appendChild(hueDiv);

    const luminosityDiv = document.createElement('div')
    luminosityDiv.classList.add('luminosity', 'text');
    document.body.appendChild(luminosityDiv);
}


function calculateHsl(x, y, height, width) {
    const hue = Math.round((x / width) * 360)
    const luminosity = Math.round((y / height) * 100);
    const saturation = 50
    return `hsl(${hue}, ${saturation}%, ${luminosity}%)`
}
export { pick }