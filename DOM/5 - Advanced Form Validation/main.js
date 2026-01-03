
const input = document.querySelector("#fullName")

input.addEventListener("blur", function () {
    console.log("blur event occurred")
})

input.addEventListener("change", function () {

    console.log("change event triggered", input.value);
})

input.addEventListener("input", function () {
    console.log("input event triggered", input.value);

})

input.addEventListener("focus", function () {
    console.log("focus event triggered")
})


