document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector(".container");
    let submit = document.querySelector("button[type='submit']")
    let userInteracted = false;
    form.addEventListener("input", function (event) {
        // console.log(event.type, event.target)
        // userInteracted = true;
        // form.classList.add("dirty");
        // event.target.classList.add("dirty")
    })


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