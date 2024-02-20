const http = require('http');
const fs = require('fs')

const port = 8888;

const server = http.createServer((req, res) => {
    // call index.html
    if (req.url === '/' || '') {
        fs.readFile('./pages/index.html', (err, data) => {
            if(err){
                res.writeHead(500, {'Content-type': 'text/html'});
                res.end('Internal server error');
            }else {
                res.writeHead(200, {'Content-type': 'text/html'});
                res.end(data);
            }
        })
    }
    // Call about.html
    if (req.url === '/about'){
        fs.readFile('./pages/about.html', (err, data) => {
            if (err){
                res.writeHead(500, {'Content-type': 'text/html'});
                res.end('Internal server error');
            }
            else{
                res.writeHead(200, {'Content-type': 'text/html'});
                res.end(data)
            }
        })
    }
    // Call contact-me.html
    if (req.url === 'contact-me'){
        fs.readFile('./pages/contact-me.html', (err, data) => {
            if (err){
                res.writeHead(500, {'Content-type': 'text/html'});
                res.end('Internal server error');
            }
            else{
                res.writeHead(200, {'Content-type': 'text/html'});
                res.end(data)
            }
        })
    }
    else {
        fs.readFile('./pages/404.html', (err, data) => {
            if (err){
                res.writeHead(500, {'Content-type': 'text/html'});
                res.end('Internal server error');
            }
            else{
                res.writeHead(404, {'Content-type': 'text/html'});
                res.end(data)
            }
        })
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}`))