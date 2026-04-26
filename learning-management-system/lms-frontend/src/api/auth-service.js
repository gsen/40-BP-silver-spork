import { post } from "./api";

const baseUrl = 'api/auth';

export const AUTH_ENDPOINTS = {
    registerUser: `${baseUrl}/register`,
    login: `${baseUrl}/login`,
    logout: `${baseUrl}/logout`
}

export function registerUser({ name, email, password }) {
    return post(AUTH_ENDPOINTS.registerUser, { name, username: email, password });
}

export function logout() {
    return post(AUTH_ENDPOINTS.logout);
}

export function login(email, password) {
    return post(AUTH_ENDPOINTS.login, { email, password }, true);
}
