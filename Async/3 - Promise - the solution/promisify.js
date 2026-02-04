function fetchUserProfile(userId, callback) {
    setTimeout(() => {

        if (!userId) {
            callback("User not defined", null);
        } else {
            callback(null, { name: "gaurav", id: 1, })
        }
    }, 1000);
}

fetchUserProfile(1, (error, profile) => {
    console.log("callback version")
    if (error) {
        console.log(error);
    } else {
        console.log(profile);
    }
})

function promisify(fn) {
    return function (...args) {
        console.log(arguments)
        console.log(args)
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                ``
                console.log("promisified version")
                if (error) reject(error);
                else resolve(result);
            });
        });
    }
}

const fetchUserProfilePromisified = promisify(fetchUserProfile);

fetchUserProfilePromisified(1).then(user => console.log(user))
    .catch(error => console.log(error))
fetchUserProfilePromisified(0).then(user => console.log(user))
    .catch(error => console.log(error))



// fetchUserProfile(1)
//     .then(user => console.log(user))
//     .catch(error => console.log(error))
