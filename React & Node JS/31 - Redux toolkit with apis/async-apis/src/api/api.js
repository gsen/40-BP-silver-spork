export async function getRandomUser() {
    const response = await fetch("https://randomuser.me/api");
    const result = (await response.json()).results[0];
    return result;
}