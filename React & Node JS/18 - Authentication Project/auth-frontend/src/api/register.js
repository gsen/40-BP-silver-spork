import { getItem, setItem } from "../helpers/storage";
import { USERS } from "../helpers/common";
export function registerUser({ name, email, password }) {
    let users = getUsers();
    if (!users) {
        users = [];
    }
    users.push({ name, email, password })
    setItem(USERS, users);
    return true;
}

function getUsers() {
    return getItem(USERS);
}

export function updatePassword(username, updatedPassword) {
    let users = getUsers();
    if (!users) {
        throw new Error("User does not exist");
    }
    let index = users.findIndex(user => user.email === username);
    if (index > -1) {
        users[index].password = updatedPassword;
    }
    setItem(USERS, users);
    return true;
}

