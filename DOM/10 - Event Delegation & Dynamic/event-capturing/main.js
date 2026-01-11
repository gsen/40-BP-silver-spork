document.addEventListener("click", () => {
    console.log("document clicked");
}, { capture: true })

document.querySelector(".parent").addEventListener("click", (event) => {
    console.log("parent clicked")
}, { capture: true })

document.querySelector(".child").addEventListener("click", (event) => {
    // event.stopPropagation();
    console.log("child clicked")
}, { capture: true })