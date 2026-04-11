import { CURRENT_USER } from "./common";

export function setItem(key, value, type = "local") {
    const storage = type === "local" ? localStorage : sessionStorage;
    storage.setItem(key, JSON.stringify(value))
}

export function getItem(key, type = "local") {
    try {
        const storage = type === "local" ? localStorage : sessionStorage;
        return JSON.parse(storage.getItem(key))
    } catch (ex) {
        console.error(ex);
        return null;
    }
}

export function getAuthToken() {
    const currentUser = getItem(CURRENT_USER) ?? getItem(CURRENT_USER, "session");
    if (currentUser?.token) {
        return currentUser.token;
    }
    return null;
}


