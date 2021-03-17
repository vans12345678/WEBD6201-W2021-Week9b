const fs = require('fs');
const http = require('http');
const PORT = 3000;
const HOST  = "localhost";

let server = http.createServer((req, res) => 
{
    console.log(req);
    fs.readFile(__dirname + req.url, function (err,data) {
        if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
        }
        res.writeHead(200);
        res.end(data);
        });
})
server.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);


