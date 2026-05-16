import Redis from "ioredis";

function main() {
    const redis = new Redis({
        host: '127.0.0.1',
        port: 6379,
    });
}

main();
