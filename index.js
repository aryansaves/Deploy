import fs from "fs"
import http from "http"

const server = http.createServer((req, res) => {
    if(req.url === '/data' && req.method === 'GET'){
        fs.readFile('./data.json', 'utf-8', (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'application/json'})
                res.end(JSON.stringify({error: 'Failed to read data'}))
                return 
            }
            
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(data)
    })
    } else {
        
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({error: 'Not found'}))
    }
})

const PORT = 10000
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on render`)
})