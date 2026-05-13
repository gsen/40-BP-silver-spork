// input read => pipe => write


// input | operation/transformation | output

import fs from "node:fs";
import zlib from "node:zlib";

const readStream = fs.createReadStream("./nodejs-large-stream-demo.txt");
const writeStream = fs.createWriteStream("nodejs-large-stream-demo.txt.gz");


readStream
    .pipe(zlib.createGzip())
    .pipe(writeStream)