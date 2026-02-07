function pingRequest(name, delay, fail = false) {
    console.log("connecting server - ", name)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject(name)
            } else {
                resolve(name)
            }
        }, delay);
    })
}

const indServer = pingRequest("request-ind", 1000);
const usServer = pingRequest("request-us", 1000, true);
const europeServer = pingRequest("request-eu", 2000);

function checkServerHealth() {
    const healthCheckup = Promise.allSettled([indServer, usServer, europeServer]);
    const fastestServer = Promise.any([indServer, usServer, europeServer]);
    healthCheckup.then(result => {
        console.log("===Server health====");
        const status = result
            .map(item => ({
                name: item.value ?? item.reason,
                status: item.status === "fulfilled" ? "up" : "down"
            }))
        console.table(status);
        return fastestServer;
    }).then(result => {
        console.log("fastest server is - ", result);
        if (result === "request-ind") {
            sendRequest(pingRequest('server-ind', 1000), "https://fetchuser/1");
        }
        else if (result === "request-us") {
            sendRequest(pingRequest('server-us', 1000), "https://fetchuser/1");
        } else if (result === "request-eu") {
            sendRequest(pingRequest('server-eu', 1000), "https://fetchuser/1");
        }
    })


}
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("request timed out")
        }, duration);
    });
}
function sendRequest(server, url) {
    console.log("attempting to get data from-", url)
    Promise.race([server, timeout(1000)])
        .then(console.log)
        .catch(console.error)
}

checkServerHealth();