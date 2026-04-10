import jwt from "jsonwebtoken"
export default function generateToken(data) {
    return new Promise((resolve, reject) => {
        jwt.sign({ ...data }, process.env.JWT_KEY, (error, token) => {
            if (error) {
                reject(error)
            } else {
                resolve(token)
            }
        })
    });
}