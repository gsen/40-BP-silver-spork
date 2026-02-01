const jobPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("job lag gayi");
        reject("paise gaye")
    }, 2000); // represents 8 months


});
console.log("mujhe 8 months do, job lagne ka promise");
// success outcome
// jobPromise.then((result) => {
//     console.log(result);
// })

// // failure outcome
// jobPromise.catch(error =>
//     console.error(error))

// finally
jobPromise.finally(() => {
    console.log("will be called irrespective of success or error")
})


// same as above
jobPromise.then((result) => {
    console.log(result);
}).catch(error =>
    console.error(error)).finally(() => {
        console.log("will be called irrespective of success or error")
    })


// same as above
// first parameter - success callback
// second paramerter - catch/error callback
jobPromise.then((result) => {
    console.log(result);
}, error =>
    console.error(error))






