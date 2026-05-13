import { fork } from "node:child_process";

const child = fork("./fork-example.mjs"); //
// independent process creation
// child process crashes - parent will have no impact
// inter process communication 

child.send({
    task: "generate-report"
});

child.on("message", (msg) => {
    console.log("Parent received: ", msg)
})