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

orderFood(() => {
    prepareFood(() => {
        sendForDelivery(() => {
            foodDelivered();
        })
    })
})

// fetch user profile
// validate profile
// display dashboard


