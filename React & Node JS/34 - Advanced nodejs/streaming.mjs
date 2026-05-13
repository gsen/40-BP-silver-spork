// input read => pipe => write


// input | operation/transformation | output

import fs from "node:fs";
import zlib from "node:zlib";

const readStream = fs.createReadStream("./nodejs-large-stream-demo.txt");

const writeStream = fs.createWriteStream("./copy.txt");

readStream.pipe(writeStream);