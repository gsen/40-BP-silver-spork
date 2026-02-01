

const timerId = setInterval(() => {
    console.log("code is being executed from interval");

});

const timeoutId = setTimeout(() => {
    console.log("code from timeout")
}, 10000)

// both setTimeout & setInterval return an id which is used to uniquely identify them.
// using this id you can cancel or clear the timeout/interval

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timerId); // clearInterval clears the interval function
    clearTimeout(timeoutId);// clearTimemout clears the timer created using setTimeout

})






// 1:02:00



