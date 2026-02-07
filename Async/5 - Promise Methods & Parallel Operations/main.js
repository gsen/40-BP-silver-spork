
function fetchUsers(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("users")
        }, delay);
    })
}
function fetchPosts(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("posts")
        }, delay);
    })
}
function fetchComments(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("comments")
        }, delay);
    })
}

Promise.resolve(10).then(console.log)
function request4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error due to timeout")
        }, 1000);
    })
}
const startTime = performance.now();
fetchPosts(1000)
    .then(() => fetchComments(1000))
    .then(() => fetchUsers(1000))
    .finally(() => {
        const endTime = performance.now();
        console.log(endTime - startTime);
    })

let promiseAllStartTime = performance.now();
Promise.all([fetchUsers(), fetchPosts(), fetchComments(), request4()]).then(result => {
    console.log(result)
}).catch(error => {
    console.error(error)
}).finally(() => {
    const endTime = performance.now();
    console.log(endTime - promiseAllStartTime);

})
// will resolve only when all promises are fulfilled.
// will get rejected if any one promise is rejected 
// when resolved, the result will contain result for each promise in an array
console.log("calling any");

// Promise.any([request4()])
//     .then(console.log)
//     .catch(console.error)
// will resolve with the first promise that is resolved.
// will reject when all the promises are rejected.

// 
console.log("calling promise.allSettled")
Promise.allSettled([fetchUsers(), fetchPosts(), fetchComments(), request4()])
    .then(console.log)


Promise.race([fetchComments(2000), fetchPosts(2000), request4()])
    .then((result) =>
        console.log(result))
    .catch((error) =>
        console.error(error))
    .finally(() =>
        console.log("promise.race called"))

function timeout(duration = 0) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("timeout");

            resolve("timeout")
        }, duration);
    });
}

Promise.race([fetchUsers(1000), timeout(500)])
    .then(console.log)
    .catch(console.error)

// Server health checker 
// report how apis are working
// find the fastest api
// make the call to the fastest api 




