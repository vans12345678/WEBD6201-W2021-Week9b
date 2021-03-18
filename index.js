"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;
const HOST = "localhost";
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "Client")));
app.use(express.static(path.join(__dirname, "Views")));
app.get('/', (req, res) => {
    displaySPA(res);
});
app.get('*', (req, res) => {
});
app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
function displaySPA(res) {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("ERROR: 404 - Page not found");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}
console.log(`Server running at http://${HOST}:${PORT}/`);
//# sourceMappingURL=index.js.map