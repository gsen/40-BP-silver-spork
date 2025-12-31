document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".container");
    let submit = document.querySelector("button[type='submit']")
    form.addEventListener("change", function () {
        const isValid = form.checkValidity();
        if (!isValid) {

            submit.setAttribute("disabled", "");
        } else {
            submit.removeAttribute("disabled")
        }
    })
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        let submittedValues = "";

        for (let [key, value] of formData.entries()) {
            submittedValues += `${key}:${value}\n`
        }

        alert(submittedValues);
        form.reset();
    })

})