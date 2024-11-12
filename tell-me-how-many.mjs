import { readdir } from 'fs/promises'
const path = (process.argv[2] || ".")
try {
    const files = await readdir(path);
    console.log(files.length);
  } catch (err) {
    console.error(err);
  } 
