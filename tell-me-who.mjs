import {readdir} from 'fs/promises'

const path = (process.argv[2] || ".")
const Files = await readdir(path)
const NewFiles = []
let counter = 1
Files.forEach(file => {
    let PureFile = file.replace(".json" , "")
    PureFile = PureFile.split("_")
    PureFile = `${PureFile[1]} ${PureFile[0]}`
    NewFiles.push(PureFile)
})
NewFiles.sort().forEach((file) => {
    console.log(`${counter}. ${file}`)
    counter++
})
