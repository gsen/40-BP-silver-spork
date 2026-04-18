import { saveUser as save } from "../models/users.mjs";
export async function saveUser(req, res) {
    await save()
    res.json({ message: "User saved" })
}