const backendURL = import.meta.env.VITE_BACKEND_URL;

export function setImagePath(path) {
    if (path) {
        return `${backendURL}/${path}`
    }
    return ""
}

function prepareHeaders(contentType) {

    const customHeaders = new Headers();
    if (contentType) {
        customHeaders.append("Content-Type", contentType);
    }
    return customHeaders;
}

async function post(endPoint, body, contentType = "application/json") {

    const response = await fetch(`${backendURL}/${endPoint}`, {
        method: 'POST',
        body: contentType === "application/json" ? JSON.stringify(body) : body,
        headers: prepareHeaders(contentType),
        credentials: "include"
    });

    return response.json();
}

async function get(endPoint) {
    try {

        const response = await fetch(`${backendURL}/${endPoint}`, {
            headers: prepareHeaders({}),
            credentials: "include"
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