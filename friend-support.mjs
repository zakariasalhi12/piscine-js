import http from 'http';
import { readFile } from 'fs/promises';

const PORT = 5000;

const server = http.createServer(async (req, res) => {
    const URL = req.url.slice(1)
    try {
        const data = await readFile(`guests/${URL}.json`, { encoding: 'utf-8' })
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(JSON.parse(data)))
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.statusCode = 404
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'guest not found' }))
        } else {
            res.statusCode = 500 
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'server failed' }))
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})
