import { MongoClient } from "mongodb";
import chalk from "chalk"
let client;
/** @type {import("mongodb").Db} */
let db;
export async function connect(connectionString) {
    console.log(chalk.bgYellow("Connecting to mongo server..."));
    try {
        client = new MongoClient(connectionString);
        await client.connect();
        db = await client.db();
        await db.command({ ping: 1 });
        console.log(chalk.blue("Connected successfully to mongo server"));
    } catch (err) {
        console.log(chalk.redBright("Error connecting to mongo server"));
        console.log(err);
    }
}

export function getDB() {
    return db;
}

export async function disconnect() {
    if (client) {
        await client.close();
        console.log("%cDisconnected successfully from mongo server", "color: blue;");
    }
}