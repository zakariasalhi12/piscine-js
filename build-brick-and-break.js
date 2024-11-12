export function build(amount) {
    var body = document.body;
    let counter = 1
    var fn =  setInterval( () => {
        var brick = document.createElement('div');
        brick.id = `brick-${counter}`
        if(counter % 3 === 2){
            brick.dataset.foundation = 'true';
        }
        body.appendChild(brick);
        counter++
        if(counter > amount){
            clearInterval(fn)
        }
    }, 100)
}

export function repair(...ids) {
    ids.forEach(id =>{
        let element =  document.getElementById(id);
        if(element.dataset.foundation === 'true'){
            element.dataset.repaired = 'in progress'
        }else{
            element.dataset.repaired = 'true'
        }
    })
}

export function destroy() {
    document.body.lastElementChild.remove()
}