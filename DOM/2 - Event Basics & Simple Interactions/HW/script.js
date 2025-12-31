//your JS code here. If required.

const container = document.querySelector(".container");
let innerHTML = "";
// for (let index = 1; index <= 100; index++) {
//     innerHTML += `<section class="square"></section>`
// }
// container.innerHTML = innerHTML;
// const squares = document.querySelectorAll(".square");
// for (let square of squares) {
//     square.addEventListener("mouseenter", function name() {
//         setColor(square)
//     })

//     square.addEventListener("mouseleave", function () {
//         resetColor(square);
//     })
// }

for (let index = 1; index <= 100; index++) {
    let square = document.createElement("section");
    square.classList.add("square");
    square.addEventListener("mouseenter", function name() {
        setColor(square)
    })

    square.addEventListener("mouseleave", function () {
        resetColor(square);
    })
    container.appendChild(square);
}
function resetColor(square) {
    setTimeout(() => {
        square.style.backgroundColor = 'gray';
    }, 1000);
}
function setColor(square) {
    square.style.backgroundColor = generateRandomColor();
}


function generateRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)},
					${Math.floor(Math.random() * 256)},
					${Math.floor(Math.random() * 256)})`;
}
