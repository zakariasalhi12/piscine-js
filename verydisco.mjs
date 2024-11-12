let FirstArg = process.argv[2]
let SplitedWord = FirstArg.split(" ")
let Result = []
SplitedWord.forEach(word => {
    Result.push(Disco(word))
});
console.log(Result.join(" "))


function Disco(str = "") {
    let half = Math.ceil(str.length /2)
    let FirstHalf = (str.slice(0 , half))
    let SecendHalf = (str.slice(half , str.length))
    return SecendHalf +  FirstHalf
}


// discovery would print verydisco (🕺🏼) in console.
// Node is awesome would print deNo si omeawes in the console.
