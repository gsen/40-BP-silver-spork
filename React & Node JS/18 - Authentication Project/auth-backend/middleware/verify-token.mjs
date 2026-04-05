import { validateToken } from "../repository/users.mjs";

export default async function verfiyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        res.status(401).send({ message: 'No token found' });
    } else {
        console.log("validating token")
        const result = await validateToken(token);
        console.log(result)
        if (result?.token) {
            req.user = { username: result.username, name: result.name, id: result._id }
            next();
        } else {
            res.status(401).send({ message: "Invalid token" })
        }
    }
}