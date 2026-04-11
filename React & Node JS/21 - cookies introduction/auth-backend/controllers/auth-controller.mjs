import { hash, compare } from "bcrypt"
import { createNewUser, getUser, updateUser, logout as logoutUser } from "../repository/users.mjs";
import { generateToken } from "../utils/jwt.mjs";
const SALT_ROUNDS = 10;
const COOKIE_OPTIONS = {
    httpOnly: true,
    secure: false, // true in case of https,
    maxAge: 60 * 60 * 1000,
    sameSite: "lax"
}
export async function registerUser(req, res) {

    const { username, password, name } = req.body;
    console.log({ username, password, name });
    const hashedPassword = await hash(password, SALT_ROUNDS);
    const result = await createNewUser({ username, password: hashedPassword, name })
    res.send(result)

}

export async function login(req, res) {
    const { username, password } = req.body;
    const existingUser = await getUser(username);
    const validUser = await compare(password, existingUser.password)
    if (validUser) {
        try {
            const token = await generateToken({ username, name: existingUser.name, id: existingUser._id });
            res.cookie("token", token, COOKIE_OPTIONS)
            res.send({
                username: existingUser.username, name: existingUser.name,
            })
        } catch (ex) {
            res.status(500).send({ message: 'Error while generating token' })
        }
    } else {
        res.status(401).send('Invalid username or password!');
    }
}

export async function logout(req, res) {
    res.clearCookie("token", COOKIE_OPTIONS);
    res.send({ message: "User logged out successfully!" })
}