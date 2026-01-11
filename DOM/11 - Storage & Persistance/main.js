// object literal syntax

let person = {
    name: "Gaurav",
    age: 30
}

JSON

Number("29")
parseInt("29")

// '{"name":"Gaurav","age":30}'


JSON.parse('{"name":"gaurav","age":29}')

// localStorage

// it is data which is stored in the browser for a particular url
// the data is permanent. 
// data is only removed when the browser data is cleared or 
// if it is programatically removed using remove item or clear methods

// to set in storage
localStorage.setItem("theme", "dark")
// to retreive from storage
localStorage.getItem("theme");

// to remove from local storage
localStorage.removeItem("theme")

localStorage.setItem("username", "john")
localStorage.setItem("password", "122434")

// clears all items from local storage
localStorage.clear();

document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#user-info");

    form.addEventListener("input", function () {
        let formData = new FormData(this);
        let firstName = formData.get("firstName")
        let lastName = formData.get("lastName")
        let gender = formData.get("gender");
        console.log();
        localStorage.setItem("user-info", JSON.stringify({ firstName, lastName, gender }))

    })

    form.addEventListener("submit", function () {

    })
})




