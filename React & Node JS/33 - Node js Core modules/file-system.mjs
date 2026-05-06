import { readFileSync, readFile, write } from "node:fs";
import { readFile as readFileAsync, writeFile, appendFile } from "node:fs/promises";
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

function readContents() {
    console.log("called from readContents")
    readFile(new URL("./package.json", import.meta.url), "utf-8", (err, data) => {
        if (err) {
            console.log("Error reading file", err);
            return;
        }
        console.log(data);
    })
}

async function readContentsAsync() {
    const contents = await readFileAsync(new URL("./package.json", import.meta.url), "utf-8");
    console.log("from async read")
    console.log(contents);
}

async function createFile() {
    const contents = "hello world accio!";

    await writeFile("output.text", contents, "utf-8");
    const user = { name: "gaurav", age: 21 };
    await writeFile("user.json", JSON.stringify(user), "utf-8");
    console.log("output.txt created successfully!")
}

function writeLogs(logContent) {
    return appendFile("logs.text", logContent, "utf-8");
}



main();

readContents();
readContentsAsync();

createFile();

writeLogs("learning append functionality").then(() => {
    console.log("file written to logs.txt")
})
writeLogs("\nwriting new line 2").then(() => {
    console.log("file written to logs.txt")
})

// writeLogs("writing new log line").then(() => {
//     console.log("file written to logs.txt")
// })