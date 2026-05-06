import os from "node:os";

console.log("Platform:", os.platform());

console.log("architecture:", os.arch())

console.log("Free memory", os.freemem())
console.log("Total memory", os.totalmem())

console.log("Home dir:", os.homedir())

console.log("CPU info", {
    info: os.cpus(),
    cores: os.cpus().length
})