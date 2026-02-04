// promise chain 

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