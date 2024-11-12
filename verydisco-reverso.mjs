import { readFile } from 'fs/promises'

let FirstArg = process.argv[2]

function Disco(str = "") {
    let half = Math.floor( str.length / 2)
    let FirstHalf = (str.slice(0, half))
    let SecendHalf = (str.slice(half, str.length))
    return SecendHalf + FirstHalf
}

try {
    let Content = await readFile(FirstArg , { encoding: 'utf8' })
    let SplitedWord = Content.split(" ")
    let Result = []
    SplitedWord.forEach(word => {
        Result.push(Disco(word))
    });
    console.log(Result.join(" "));    
} catch (error) {
    console.error(error);
}
