const backendURL = import.meta.env.VITE_BACKEND_URL;

function prepareHeaders(headers = {}) {
    const customHeaders = new Headers(headers);
    return customHeaders;
}

async function post(endPoint, body) {

    const response = await fetch(`${backendURL}/${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: prepareHeaders({
            "Content-Type": "application/json"
        }),
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