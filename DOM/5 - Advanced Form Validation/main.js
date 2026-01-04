
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



// const selectedCities = document.querySelector("#cities").selectedOptions

// let options = []
// for (let option of selectedCities) {
//     // console.log(option.value)
//     options.push(option)
// }
// console.log(options)

// converts HTMLElementCollection to Array
Array.from(document.querySelector("#cities").selectedOptions)

// after converting we are calling map function
Array.from(document.querySelector("#cities").selectedOptions).map(function (option, index) {
    return option.value
})

// but Array.from also provides a map function which gets called

Array.from(document.querySelector("#cities").selectedOptions, function (option, index) {
    return option.value
})

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    let selectedCities = formData.getAll("cities");

    console.log(selectedCities)

    // if just write formData.get we will get only first selected element
    let selectedTech = formData.getAll("tech")
    console.log(selectedTech);


})