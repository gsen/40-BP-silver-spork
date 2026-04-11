import { validateToken } from "../utils/jwt.mjs";

export default async function verfiyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        res.status(401).send({ message: 'No token found' });
    } else {
        console.log("validating token")
        try {

            const result = await validateToken(token);
            console.log(result)
            if (result) {
                req.user = { username: result.username, name: result.name, id: result._id, token }
                next();
            } else {
                res.status(401).send({ message: "Invalid token" })
            }
        } catch (ex) {
            res.status(401).send({ ex })
        }
    }
}