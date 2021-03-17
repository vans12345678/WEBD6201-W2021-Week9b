//Modules
const fs = require('fs');
const url = require("url");
const http = require('http');


//3rd party module
const mimeTypes = require("mime-types");

//alias
let lookup = mime.lookup;

const PORT = 3000;
const HOST = "localhost";



let server = http.createServer((req, res) => 
{
    
    let parsedURL = new URL(req.url, "http://" + HOST + ":" + PORT);

    let path = parsedURL.pathname.replace(/^\/+|\/+$/g, "");

    switch (path) {
        case "/":
        case "\\":
        case "home":
            path = "index.html";
            break;
        case "services":
            path = "index.html";
            break;
        case "contact":
            path = "index.html";
            break;
        case "contact-list":
            path = "index.html";
            break;
        case "projects":
            path = "index.html";
            break;
        case "register":
            path = "index.html";
            break;
        case "login":
            path = "index.html";
            break;
        case "edit":
            path = "index.html";
            break;
        default:
            break;

    }

    let file = __dirname + path;

    fs.readFile(file + req.url, function (err, data) {
        if (err) 
        {
            res.writeHead(404);
            res.end("ERROR: 404 - Page not found");
            return;
        }

        res.writeHead(200);
        res.end(data);
    });
})
server.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);

