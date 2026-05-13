import { Transform } from "node:stream";

class UpperCaseTransform extends Transform {
    _transform(chunk, encoding, callback) {
        const transformed = chunk.toString().toUpperCase();
        callback(null, transformed);
    }
}

const transformer = new UpperCaseTransform();

process.stdin.pipe(transformer).pipe(process.stdout);