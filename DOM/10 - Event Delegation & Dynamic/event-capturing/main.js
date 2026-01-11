// by default events are bubbled up 
// if you want to change this behaviour you can set the capture flag to true
// in that case event listeners will be called as they are captured

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