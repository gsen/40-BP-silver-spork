import User from "../models/users.mjs";
import { hash, compare } from "bcrypt";
const SALT_ROUNDS = 10;
export async function createUser(user) {
    try {
        await User.init(); // ensure index is built - duplicate emails will not be allowed
        const newUser = await User.create({ ...user, password: await hashPassword(user.password) });
        return { error: null, user: newUser }
    } catch (ex) {
        return { error: ex.errorResponse.errmsg }
    }
}

function hashPassword(password) {
    if (password) {
        return hash(password, SALT_ROUNDS)
    }
}

// export async function login(credentials) {
//     const { username, password } = credentials;
//     const existingUser = await getUser(username);
//     const validUser = await compare(password, existingUser.password)
//     if (validUser) {
//         try {
//             const token = await generateToken({ username, name: existingUser.name, id: existingUser._id });
//             await updateUser(username, { token })
//             res.send({
//                 username: existingUser.username, name: existingUser.name,
//                 token
//             })
//         } catch (ex) {
//             res.status(500).send({ message: 'Error while generating token' })
//         }
//     } else {
//         res.status(401).send('Invalid username or password!');
//     }
// }

// export async function logout(req, res) {
//     await logoutUser(req.user.username, { token: null });
//     res.send({ message: "User logged out successfully!" })
// }

