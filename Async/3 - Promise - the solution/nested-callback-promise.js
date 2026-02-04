// setTimeout(() => {
//     console.log("step 1 completed");
//     setTimeout(() => {
//         console.log("step 2 completed");
//         setTimeout(() => {
//             console.log("step 3 completed")
//         }, 1000);
//     }, 1000);
// }, 1000);


function wait(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, duration);
    })
}
// promise chaining
// outcome returns a new promise
// wait(1000).then(() => {
//     console.log("step 1 completed");
//     return wait(1000);
// }).then(() => {
//     console.log("step 2 completed");
//     return wait(2000);
// }).then(() => {
//     console.log("step 3 completed")
// })



function orderFood() {
    return new Promise((resolve) => {
        console.log("Food ordered");
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

function prepareFood() {
    return new Promise((resolve) => {
        console.log("Preparing food");
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

function sendForDelivery() {
    return new Promise((resolve, reject) => {
        console.log("Out for delivery");
        setTimeout(() => {
            reject("unable to find delivery agent")
            // resolve();
        }, 1000);
    });
}

function foodDelivered() {
    console.log("Food delivered");
}


orderFood()
    .then(prepareFood)
    .then(sendForDelivery)
    .then(foodDelivered)
    .catch(error => console.error(error))

