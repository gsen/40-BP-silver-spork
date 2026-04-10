import { requiresToken } from "../helpers/common";
import { getAuthToken } from "../helpers/storage";


const backendURL = import.meta.env.VITE_BACKEND_URL;

function prepareHeaders(headers = {}, requiresToken) {

    const customHeaders = new Headers(headers);

    if (requiresToken) {
        const token = getAuthToken();
        if (!token) {
            throw new Error("User needs to be authenticated")
        }
        customHeaders.set("Authorization", token);
    }
    return customHeaders;
}

async function post(endPoint, body) {

    const response = await fetch(`${backendURL}/${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: prepareHeaders({
            "Content-Type": "application/json"
        }, requiresToken(endPoint))
    });

    return response.json();
}

async function get(endPoint) {
    try {

        const response = await fetch(`${backendURL}/${endPoint}`, {
            headers: prepareHeaders({}, requiresToken(endPoint))
        });
        if (!response.ok) {
            const result = await response.json();
            return { error: result }
        } else {

            return response.json();
        }
    } catch (ex) {
        throw ex
    }
}

export { post, get }