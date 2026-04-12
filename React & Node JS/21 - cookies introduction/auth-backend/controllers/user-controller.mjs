import { getUser, updateUser } from "../repository/users.mjs";

export async function fetchProfile(req, res) {
    const { username } = req.user;
    const { profileImage, name, _id } = await getUser(username);
    res.json({ username, profileImage, name, id: _id })
}

export async function profilePicture(req, res, next) {
    console.log(req.file);
    const { username } = req.user;
    await updateUser(username, { profileImage: req.file.path })
    res.send({ msg: `Avatar image uploaded succesfully` })
}