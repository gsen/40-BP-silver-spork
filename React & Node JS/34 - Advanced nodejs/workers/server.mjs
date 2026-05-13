import express from "express";
import { Worker } from "worker_threads";

const app = express();

app.get("/", (req, res) => {
    res.send("server is responding");
})

app.get("/heavy", (req, res) => {
    console.log("heavy task requested");
    const worker = new Worker("./worker.js");

    worker.on("message", (result) => {
        console.log("heavy task completed");
        res.send(`Heavy task result: ${result}`);
    })

    worker.on("error", (err) => {
        console.log(err.message);
        res.status(500).send(err.message);
    })

    worker.on("exit", (code) => {
        console.log("worker exited with code:", code)
    })

})

app.listen(3000, () => {
    console.log("server is running on port:3000");

})