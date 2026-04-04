import { hash, compare } from "bcrypt"
import { createNewUser, getUser } from "../models/users.mjs";
const SALT_ROUNDS = 10;
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
    const result = await compare(password, existingUser.password)
    if (result) {
        res.send('match')
    } else {
        res.send('Invalid username or password!');
    }
}