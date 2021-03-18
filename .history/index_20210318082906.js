const fs = require('fs');
const url = require("url");
const http = require('http');


//3rd party module
const express = require('express');
const app = express();

//alias
let lookup = mimeTypes.lookup;

const PORT = 3000;
const HOST = "localhost";

app.get('/', (req, res) => {
    res.send('Hello World!');
  })
  
  app.listen(port, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
  })

    
server.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}/`);


// fs.readFile(file, function (err, data) 
    // {
    //     if (err) 
    //     {
    //         res.writeHead(404);
    //         res.end("ERROR: 404 - Page not found");
    //         return;
    //     }

    //     res.setHeader("X-Content-Type-Options", "nosniff"); // security: avoids mime-sniffing
    //     let mime = lookup(path);
    //     res.writeHead(200, { "Content-type": mime });
    //     res.end(data);
    // });