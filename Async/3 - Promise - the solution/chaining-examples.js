// promise chain 
// if the first function returns a promise you can create multiple chains
// then, catch and finally also return promises that is why you can keep on chaining them
// if a value is returned, the returned value is passed as an argument to the next block in the
// chain

function add(a, b) {

    return Promise.resolve(a + b);
}
add(2, 3).then(result => {
    console.log(result)
    return "xyz";

}).then((res) => {
    console.log(res)
}).then(res => {
    console.log("third", res)
}).then(res => {
    console.log("fourth", res)
    throw new Error("some error occurred")
}).catch(ex => console.log(ex))
    .then(() => {
        console.log("fifth")
    }).finally()