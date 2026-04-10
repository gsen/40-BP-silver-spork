import { get } from "./api";
const baseUrl = `api/user`;
const USER_ENDPOINTS = {
    profile: `${baseUrl}/profile`
}
export async function fetchProfile() {
    const response = await get(USER_ENDPOINTS.profile);
    return response.json();
}