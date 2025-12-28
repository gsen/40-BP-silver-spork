document.addEventListener("DOMContentLoaded", function () {
    const circle = document.querySelector(".circle");
    document.addEventListener("mousemove", function (event) {
        const { clientX, clientY } = event;
        circle.style.top = `${clientY - 20}px `;
        circle.style.left = `${clientX - 20}px`;
    })
})