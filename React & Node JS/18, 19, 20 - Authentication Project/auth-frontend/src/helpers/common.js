import { AUTH_ENDPOINTS } from "../api/auth-api";

const USERS = "users";
const CURRENT_USER = "currentUser";

export { USERS, CURRENT_USER }

const whiteList = new Set([AUTH_ENDPOINTS.registerUser, AUTH_ENDPOINTS.login]);

export function requiresToken(endpoint) {
    return !whiteList.has(endpoint);
}