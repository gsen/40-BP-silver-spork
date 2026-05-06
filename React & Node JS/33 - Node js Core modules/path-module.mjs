import path from "node:path";

const __dirname = import.meta.dirname;

// const filePath = path.join(__dirname, "type-write-effect.mjs");
const filePath = path.resolve(__dirname, "type-write-effect.mjs");


console.log(filePath);

console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.dirname(filePath));