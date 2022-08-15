const http = require('http')
const fs = require('fs').promises

const server = http.createServer((request, response) => {
    const html = fs.readFile('./index.html')
    html.then(data => {
        response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
        response.end(data)
    })
})
server.listen(8081)
server.on('listening', () => console.log('8081 server on'))