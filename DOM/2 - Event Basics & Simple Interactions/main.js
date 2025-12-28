function handleClick(event) {
    console.log(event);

    alert("button clicked")
}

function handleClick2() {
    console.log("handle click 2 called")
}

const buttonElement = document.querySelector("button");
// buttonElement.onclick = handleClick;

// buttonElement.onclick = handleClick2;

buttonElement.addEventListener("click", handleClick);
buttonElement.addEventListener("click", handleClick2);

// document.addEventListener("mousemove", function handleMouseMove() {
//     console.log("mouse is moving")
// })
function handleMouseMove(event) {
    console.log(event);
    console.log("mouse is moving")
}
document.addEventListener("mousemove", handleMouseMove)


document.querySelector("input").addEventListener("keydown", function (event) {
    console.log(event.type, event.key)

})
document.querySelector("input").addEventListener("keypress", function (event) {
    console.log(event.type, event.key)
})
document.querySelector("input").addEventListener("keyup", function (event) {
    console.log(event.type, event.key)

})
