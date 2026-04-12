export default function errorHandler(error, req, res, next) {

    console.log(error.message)
    if (error.message === "Invalid file type") {
        res.status(400).json({ error: error.message })
    }
    next();
}