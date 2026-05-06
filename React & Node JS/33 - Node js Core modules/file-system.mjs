import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function main() {
    // console.log(import.meta.url);
    const __dirname = import.meta.dirname;
    // const __filename = import.meta.filename;
    // console.log(__dirname)
    // console.log(__filename)
    // console.log(filePath);
    const filePath = resolve(__dirname, "./package.json");
    // const filePath = new URL("./package.json", import.meta.url);
    console.log(filePath);
    const contents = readFileSync(filePath, { encoding: 'utf-8' });
    console.log(contents);
}

main();