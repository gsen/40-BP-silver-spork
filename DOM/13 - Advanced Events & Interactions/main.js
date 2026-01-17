// keyboard related events

document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector("#name");

    input.addEventListener("keydown", (event) => {

        console.log("key is pressed down");
        if (event.ctrlKey && event.key === "k") {
            console.log("ctrl + k was pressed")
        }

    })

    input.addEventListener("keypress", (event) => {
        console.log("key is pressed");

    })

    input.addEventListener("keyup", () => {
        console.log("key is up after pressing");
    })

    // difference between client - x, y & page - X, Y

    // in case of page it represents where in the page mouse pointer is present
    // it consider the scroll length

    // clientX & clientY - it will tell where the mouse pointer is
    // in the viewport - view port means the part which is visible to the user

    // so when scrollbar is there client x & y will not be same as page X &Y
    // so when scrollbar is not there both page and client co-ordinates 
    // will be same

    const box = document.querySelector(".box");
    box.addEventListener("mouseover", () => {
        console.log("mouse is over the box");
    })

    box.addEventListener("mouseleave", () => {
        console.log("mouse is outside the box now");
    })





    // document.addEventListener("mousedown", (event) => {
    //     console.log("mouse button is pressed");
    // })

    // document.addEventListener("mouseup", (e) => {
    //     console.log("mouse button is released")
    // })

    let offsetX = 0;
    let offsetY = 0;
    box.addEventListener("mousedown", (event) => {

        console.log("mouse down on the box")
        console.log(event)
        event.target.classList.add("draggable");
        console.log(event.offsetX, event.offsetY)

        offsetX = event.clientX - event.target.offsetLeft;
        offsetY = event.clientY - event.target.offsetTop;

    })

    document.addEventListener("mousemove", (event) => {
        if (box.classList.contains("draggable")) {
            console.log("box is moving")
            box.style.left = `${event.clientX - offsetX}px`;
            box.style.top = `${event.clientY - offsetY}px`;
        }
    })


    document.addEventListener("mouseup", (event) => {
        box.classList.remove("draggable")

    })

    document.addEventListener("touchstart", (event) => {
        console.log("touch start event");
        console.log(event)
    })

    document.addEventListener("touchmove", event => {
        console.log("touch move");

        console.log(event);

    })

    document.addEventListener("touchend", (event) => {
        console.log("touch has ended")
    })



})