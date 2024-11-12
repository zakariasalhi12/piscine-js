import { readFile, writeFile } from 'fs/promises';

const path = process.argv[2]
const Key = process.argv[3]
const FileName = process.argv[4]

const Data = await readFile(path, { encoding: 'utf-8' })

if (Key === 'encode') {
    await writeFile(FileName || 'cypher.txt', Buffer.from(Data).toString('base64'))
} else if (Key === 'decode') {
    await writeFile(FileName || 'clear.txt', Buffer.from(Data, 'base64').toString('utf-8'))
}
