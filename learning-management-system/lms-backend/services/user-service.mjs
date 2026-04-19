import User from "../models/users.mjs";
export async function createUser(user) {
    try {

        await User.init(); // ensure index is built - duplicate emails will not be allowed
        const newUser = new User({
            ...user
        });
        return { error: null, user: await newUser.save() }
    } catch (ex) {
        return { error: ex.errorResponse.errmsg }
    }
}

export function getUser() {

}