const backendURL = import.meta.env.VITE_BACKEND_URL;

async function post(endPoint, body) {
    const response = await fetch(`${backendURL}/${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
            "Authorization": ""
        }
    });

    return response.json();
}

async function get(endPoint) {
    const response = await fetch(`${backendURL}/${endPoint}`);
    return response.json();
}

export { post, get }