import { authenticateUser, createUser } from "../services/auth-service.mjs";

const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: false, // true in case of https,
    maxAge: 60 * 60 * 1000,
    sameSite: "lax"
}

export async function registerUser(req, res) {
    const { error, user } = await createUser(req.body);
    if (error) {
        res.status(500).json(error);
    } else {
        res.json({ message: "User saved" })
    }
}

export async function login(req, res) {

    const { user, token } = await authenticateUser(req.body);
    if (token) {
        res.cookie('token', token, COOKIE_OPTIONS);
        res.send(user);
    } else {
        res.status(401).send({ message: "Unauthorized user." })
    }



}