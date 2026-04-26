const backendURL = import.meta.env.VITE_BACKEND_URL;

export function setImagePath(path) {
    if (path) {
        return `${backendURL}/${path}`;
    }
    return "";
}

const DEFAULT_HEADERS = new Headers({
    "Content-Type": "application/json"
});

async function post(
    endPoint,
    body,
    credentials = true,
    config = {

    },
) {
    let baseConifg = {
        body: JSON.stringify(body),
        headers: DEFAULT_HEADERS,
    }
    if (credentials) {
        baseConifg.credentials = "include";
    }
    const response = await fetch(`${backendURL}/${endPoint}`, {
        method: "POST",
        ...baseConifg,
        ...config
    });
    if (!response.ok) {
        const result = await response.json();
        return { error: result };
    } else {
        return response.json();
    }

}

async function get(
    endPoint,
    credentials = true,
    config = {
    },
) {
    try {
        let baseConfig = {
            headers: DEFAULT_HEADERS
        }
        if (credentials) {
            baseConifg.credentials = "include";
        }
        const response = await fetch(`${backendURL}/${endPoint}`, {
            ...baseConfig,
            ...config
        });

        if (!response.ok) {
            const result = await response.json();
            return { error: result };
        } else {
            return response.json();
        }
    } catch (ex) {
        throw ex;
    }
}

export { post, get };
