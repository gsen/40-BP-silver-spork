document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    let startX = 0;
    box.addEventListener("touchstart", (event) => {
        console.log();
        startX = event.touches[0].clientX;

    })

    box.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0].clientX;

        if (endX - startX > 30) {
            console.log("box has been swiped to the right")
        }
    })
})