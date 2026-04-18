import { Schema, Model } from "mongoose";
import { getDB } from "../config/db.mjs";

const usersSchema = new Schema({
    firstName: String,
    lastName: String,
    age: { type: Number, required: true }
})

let UserModel;
export function createModel() {
    const db = getDB();
    UserModel = db.model('User', usersSchema);
}

export async function saveUser() {
    const data = new UserModel({ firstName: "Test", lastName: "User", age: 21 });
    await data.save()
    console.log("data is saved")
}
