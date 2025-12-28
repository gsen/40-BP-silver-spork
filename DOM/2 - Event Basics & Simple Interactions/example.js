document.addEventListener("DOMContentLoaded", function () {
    function handleClick() {
        document.addEventListener("mousemove", handleMouseMove);
    }

    function handleMouseMove(event) {
        console.log(event.clientX, event.clientY);
    }
    const startButton = document.getElementById("start");
    startButton.addEventListener("click", handleClick);

    const stopButton = document.querySelector("#stop");
    stopButton.addEventListener("click", function () {
        document.removeEventListener("mousemove", handleMouseMove);
    })
})
