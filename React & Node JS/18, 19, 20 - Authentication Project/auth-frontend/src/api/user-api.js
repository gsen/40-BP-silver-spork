import { get } from "./api";
const baseUrl = `api/user`;
const USER_ENDPOINTS = {
    profile: `${baseUrl}/profile`
}
export async function fetchProfile() {
    const result = await get(USER_ENDPOINTS.profile);
    if (result.error) {
        throw result.error
    } else {
        return result;
    }
}