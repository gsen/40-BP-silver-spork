document.addEventListener("DOMContentLoaded", () => {

    const FORM_DATA = "user-info";
    function loadFormDataFromStorage() {
        let formData = sessionStorage.getItem(FORM_DATA);

        if (formData) {
            formData = JSON.parse(formData);

        }
        return formData;
    }

    function preFillFormData(savedData) {

        if (savedData) {
            setTimeout(() => {

                let { firstName, lastName, gender } = savedData;
                let firstNameInput = document.querySelector("#firstName");
                firstNameInput.value = firstName;
                let lastNameInput = document.querySelector("#lastName");
                lastNameInput.value = lastName;

                let genderInput = document.querySelector("#gender");
                genderInput.value = gender;
            }, 1000);


        }

        // document.querySelector("#firstName").value = firstName;


    }
    let firstStepForm = document.querySelector("#user-info");
    let nextForm = document.querySelector("#next-step");
    let savedData = loadFormDataFromStorage();
    preFillFormData(savedData);



    firstStepForm.addEventListener("input", function () {
        let formData = new FormData(this);
        let firstName = formData.get("firstName")
        let lastName = formData.get("lastName")
        let gender = formData.get("gender");
        console.log();
        sessionStorage.setItem(FORM_DATA, JSON.stringify({ firstName, lastName, gender }))

    })

    firstStepForm.addEventListener("submit", function (event) {
        event.preventDefault();
        event.target.style.display = "none";
        nextForm.style.display = "block";

    })


    nextForm.addEventListener("submit", (event) => {
        event.preventDefault();
    })

    const backButton = document.querySelector("#back-button")
    backButton.addEventListener("click", () => {
        nextForm.style.display = "none";
        firstStepForm.style.display = "block";
    })

})