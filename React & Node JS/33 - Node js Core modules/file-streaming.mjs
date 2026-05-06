import { createReadStream, read } from "node:fs";

function readFileUsingStreaming() {
    const filePath = new URL("./nodejs-large-stream-demo.txt", import.meta.url);

    const readStream = createReadStream(filePath, {
        encoding: "utf-8",
        highWaterMark: 64 * 1024
    });

    let chunkCount = 0;

    readStream.on("data", (chunk) => {
        chunkCount++;
        console.log(chunkCount);
        console.log("Chunk size: ", chunk.length);

        console.log(chunk);
    });

    readStream.on("end", () => {
        console.log("finished reading the file");
    })

    readStream.on("error", (err) => {
        console.log("Error while reading file", err.message);
    })

    readStream.on("close", () => {
        console.log("stream closed");
    })
}

readFileUsingStreaming();