import { post } from "./api";
const baseUrl = 'api/auth';
export const AUTH_ENDPOINTS = {
    registerUser: `${baseUrl}/register`,
    login: `${baseUrl}/login`,
    logout: `${baseUrl}/logout`
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

export async function logout() {
    try {
        const result = await post(AUTH_ENDPOINTS.logout);
        return result;
    } catch (ex) {
        console.error(ex);
        return null;
    }
}

export async function login(email, password) {
    try {
        const result = await post(AUTH_ENDPOINTS.login, { email, password }, true);
        return result;
    } catch (ex) {
        console.error(ex);
        return null;
    }
}



