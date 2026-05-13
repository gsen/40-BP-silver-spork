import { spawn } from "node:child_process";

const child = spawn("ping", ["-c", "5", "acciojob.com"]);


child.stdout.on("data", (data) => {
    console.log(data.toString())
})

child.on("close", (code) => {
    console.log("Process exited:", code)
})