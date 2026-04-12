import { get, post } from "./api";
const baseUrl = `api/user`;
const USER_ENDPOINTS = {
    profile: `${baseUrl}/profile`,
    profilePic: `${baseUrl}/profile/pic`
}
export async function fetchProfile() {
    const result = await get(USER_ENDPOINTS.profile);
    if (result.error) {
        throw result.error
    } else {
        return result;
    }
}

export async function uploadProfileImage(body) {
    const result = await post(USER_ENDPOINTS.profilePic, body, "")
    if (result.error) {
        throw result.error
    } else {
        return result;
    }
}