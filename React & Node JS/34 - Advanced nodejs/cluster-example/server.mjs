import http from "node:http";

http.createServer((req, res) => {
    res.writeHead(200);
    console.log(`Handled by ${process.pid}`)
    res.end(`Handled by ${process.pid}`);
}).listen(3000);