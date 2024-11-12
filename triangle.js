function triangle(str , height){
    let res = ""
    
    for (let i = 0; i < height; i++) {
        res += str.repeat(i+1) + "\n"
    }
    return res.slice(0 , res.length-1)
}

console.log(triangle("*" , 5));