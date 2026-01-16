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
// localStorage.clear();
const FORM_DATA = "user-info";
function loadFormDataFromStorage() {
    let formData = localStorage.getItem(FORM_DATA);

    if (formData) {
        formData = JSON.parse(formData);

    }
    return formData;
}

function preFillFormData(savedData, form) {

    if (savedData) {


        let { firstName, lastName, gender } = savedData;
        let firstNameInput = document.querySelector("#firstName");
        firstNameInput.value = firstName;
        let lastNameInput = document.querySelector("#lastName");
        lastNameInput.value = lastName;

        let genderInput = document.querySelector("#gender");
        genderInput.value = gender;



    }

    // document.querySelector("#firstName").value = firstName;


}
document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#user-info");

    let savedData = loadFormDataFromStorage();
    preFillFormData(savedData, form);



    form.addEventListener("input", function () {
        let formData = new FormData(this);
        let firstName = formData.get("firstName")
        let lastName = formData.get("lastName")
        let gender = formData.get("gender");
        console.log();
        localStorage.setItem(FORM_DATA, JSON.stringify({ firstName, lastName, gender }))

    })

    form.addEventListener("submit", function () {

    })
    // storage event is triggered when storage(local/session) is updated in another tab
    // here we are syncing the data for all the other open tabs
    window.addEventListener("storage", (event) => {
        if (event.key === FORM_DATA) {
            let { firstName, lastName, gender } = JSON.parse(event.newValue);
            let firstNameInput = document.querySelector("#firstName");
            firstNameInput.value = firstName;
            let lastNameInput = document.querySelector("#lastName");
            lastNameInput.value = lastName;

            let genderInput = document.querySelector("#gender");
            genderInput.value = gender;


        }
    })
})




