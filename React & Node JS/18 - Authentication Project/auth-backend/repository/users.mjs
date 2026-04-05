import { getDB } from "../db.mjs";

function getCollection() {
    return getDB().collection("users");
}

export async function createNewUser({ username, password, name }) {
    const collection = getCollection();
    return collection.insertOne({ username, password, name })
}

export function getUser(username) {
    const collection = getCollection();
    return collection.findOne({ username })
}

export function updateUser(username, updates) {
    const collection = getCollection();
    return collection.updateOne({ username }, { $set: updates })
}