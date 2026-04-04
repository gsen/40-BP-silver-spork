export function registerUser(req, res) {

    const { username, password, name } = req.body;
    console.log({ username, password, name });

    res.send({ username })

}

export function login(req, res) {

}