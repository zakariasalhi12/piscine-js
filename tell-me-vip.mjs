import { readdir, readFile, writeFile } from 'fs/promises';

const path = process.argv[2];
const Files = await readdir(path);
let res = [];
let LastRes = [];
let FinalLastRes = "";

for (let i = 0; i < Files.length; i++) {
    const file = Files[i];
    let ReadFile = await readFile(`${path}/${file}`, { encoding: "utf-8" });
    if (JSON.parse(ReadFile).answer.toLowerCase() === "yes") {
        res.push(file);
    }
}

for (let i = 0; i < res.length; i++) {
    let SplitedFile = res[i].replace(".json", "").split("_");
    LastRes.push(`${SplitedFile[1]} ${SplitedFile[0]}`)
}
LastRes.sort();
for (let i = 0; i < LastRes.length; i++) {
    FinalLastRes += `${i + 1}. ${LastRes[i]}\n`
}

await writeFile("vip.txt", FinalLastRes.trim())
