import { getItem, setItem } from "../helpers/storage";
import { USERS } from "../helpers/common";
import { post } from "./api";
const baseUrl = 'api/auth';
export const AUTH_ENDPOINTS = {
    registerUser: `${baseUrl}/register`,
    login: `${baseUrl}/login`
}
export async function registerUser({ name, email, password }) {
    try {
        const result = await post(AUTH_ENDPOINTS.registerUser, { name, username: email, password });
        return result;
    } catch (ex) {
        console.error(ex);
        return null;
    }
}

export async function login(username, password) {
    try {
        const result = await post(AUTH_ENDPOINTS.login, { username, password });
        return result;
    } catch (ex) {
        console.error(ex);
        return null;
    }
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

