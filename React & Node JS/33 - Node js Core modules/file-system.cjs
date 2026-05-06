const fs = require("node:fs");
const path = require("node:path")


function main() {


    // console.log(__dirname);
    // console.log("filename:", __filename);
    const filePath = path.resolve(__dirname, "./package.json");
    console.log(filePath);
    const contents = fs.readFileSync(filePath, { encoding: 'utf-8' });
    console.log(contents);
}

main();
