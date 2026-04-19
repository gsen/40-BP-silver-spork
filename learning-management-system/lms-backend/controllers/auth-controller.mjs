import { createUser } from "../services/auth-service.mjs";
export async function registerUser(req, res) {
    const { error, user } = await createUser(req.body);
    if (error) {
        res.status(500).json(error);
    } else {
        res.json({ message: "User saved" })
    }
}