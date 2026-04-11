export function fetchProfile(req, res) {
    console.log(req.user)
    res.send(req.user)
}

export function profilePicture(req, res, next) {
    console.log(req.file);
    res.send({ msg: `Avatar image uploaded succesfully` })
}