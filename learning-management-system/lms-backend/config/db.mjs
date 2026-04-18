import chalk from "chalk"
import mongoose from "mongoose";
let client;
/** @type {import("mongodb").Db} */
let db;
export async function connect(connectionString) {
    console.log(chalk.bgYellow("Connecting to mongo server..."));
    try {
        await mongoose.connect(connectionString);
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