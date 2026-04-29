export async function getRandomUser() {
    const response = await fetch("https://randomuser.me/api");
    const result = (await response.json()).results[0];
    return result;
}

export async function getUserById(id) {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const result = await response.json();
    return {
        ...result,
        name: {
            first: result.firstName,
            last: result.lastName
        },
        picture: {
            large: result.image
        }
    }
}