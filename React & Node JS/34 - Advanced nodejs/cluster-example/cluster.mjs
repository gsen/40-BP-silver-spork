import os from "node:os";
import cluster from "node:cluster";
import http from "node:http";

const totalCPUs = os.cpus().length;
console.log(totalCPUs);

if (cluster.isPrimary) {
    console.log(`Primary: ${process.pid}`);
    for (let index = 0; index < totalCPUs; index++) {
        cluster.fork();
    }
} else {
    http.createServer((req, res) => {
        res.writeHead(200);
        console.log(`Handled by ${process.pid}`)
        res.end(`Handled by ${process.pid}`);
    }).listen(3000);
    console.log(`Worker ${process.pid} started`)
}
