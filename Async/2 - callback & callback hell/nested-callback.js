// nested callback
// setTimeout(() => {
//     console.log("step 1 completed");
//     setTimeout(() => {
//         console.log("step 2 completed");
//         setTimeout(() => {
//             console.log("step 3 completed")
//         }, 1000);
//     }, 1000);
// }, 1000);


// Sequential operations

function orderFood(cb) {
    console.log("Food ordered")
    setTimeout(() => {
        cb()
    }, 1000);
}

function prepareFood(cb) {
    console.log("preparing food")
    setTimeout(() => {
        cb();
    }, 1000);
}

function sendForDelivery(cb) {
    console.log("out for delivery")
    setTimeout(() => {
        cb()
    }, 1000);
}

function foodDelivered() {
    console.log("Food delivered")
}

// orderFood(() => {
//     prepareFood(() => {
//         sendForDelivery(() => {
//             foodDelivered();
//         })
//     })
// })

// fetch user profile
// validate profile
// display dashboard

function fetchUserProfile(username, cb) {

    console.log("fetching profile")
    setTimeout(() => {
        // assuming time taken to fetch data from api
        if (!username) {
            cb("unable to fetch user", null);
        } else
            // generating two different users for validation
            if (username === "r") {

                cb(null, { name: "rahul", age: 21 })
            } else {
                cb(null, { name: "geet", age: 17 })

            }

    }, 1000);
}

function validateProfile(profile, cb) {

    console.log("Validating profile")
    setTimeout(() => {
        // time taken to run validation logic 
        if (profile.age < 18) {
            cb("User needs to above 18 years of age", null);
        } else {
            cb(null, profile);
        }
    }, 1000);
}

function displayProfile(profile) {
    console.log("Profile display for user", profile);
}
// success flow
fetchUserProfile("r", (error, profile) => {
    if (error) {
        console.error(error);
    } else {

        validateProfile(profile, (error, result) => {
            if (error) {
                console.error(error);
            } else {
                displayProfile(result);
            }
        })
    }
})
// validation failure
fetchUserProfile("g", (error, profile) => {
    if (error) {
        console.error(error);
    } else {

        validateProfile(profile, (error, result) => {
            if (error) {
                console.error(error);
            } else {
                displayProfile(result);
            }
        })
    }
})
// profile fetch error
fetchUserProfile("", (error, profile) => {
    if (error) {
        console.error(error);
    } else {

        validateProfile(profile, (error, result) => {
            if (error) {
                console.error(error);
            } else {
                displayProfile(result);
            }
        })
    }
})

// Issues with nested callback design pattern

// Hard to read

// Hard to debug

// Hard to maintain

// Callback hell - pyramid of doom
