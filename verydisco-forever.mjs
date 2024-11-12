import {writeFile} from 'fs/promises'

let FirstArg = process.argv[2]
let SplitedWord = FirstArg.split(" ")
let Result = []
SplitedWord.forEach(word => {
    Result.push(Disco(word))
});

try {
    await writeFile("verydisco-forever.txt", Result.join(" "));
} catch (err) {
    console.error("Error writing file:", err);
}


function Disco(str = "") {
    let half = Math.ceil(str.length /2)
    let FirstHalf = (str.slice(0 , half))
    let SecendHalf = (str.slice(half , str.length))
    return SecendHalf +  FirstHalf
}

