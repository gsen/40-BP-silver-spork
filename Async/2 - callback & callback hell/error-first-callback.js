// Error - first callbacks
function fetchUserProfile(userId, callback) {
    if (!userId) {
        callback("User not defined", null);
    } else {
        callback(null, { name: "gaurav", id: 1, })
    }
}

function afterUserFetch(error, user) {
    if (error) {
        console.error(error);
    } else {
        console.log(user)
    }
}

fetchUserProfile(1, afterUserFetch)
// fetchUserProfile(0, afterUserFetch)
fetchUserProfile(0, (error, user) => {
    if (error) {
        console.error(error);
    } else {
        console.log(user)
    }
})