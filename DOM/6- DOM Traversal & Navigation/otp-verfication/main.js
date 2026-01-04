document.addEventListener("DOMContentLoaded", function (event) {

    const codeInputs = document.querySelectorAll(".code-container .code");

    codeInputs[0].focus()

    for (let input of codeInputs) {
        input.addEventListener("keyup", function (event) {
            console.log(event)
            let target = event.target;
            if (target.value) {

                target.nextElementSibling?.focus()

            } else if (!target.value && event.key === "Backspace") {
                let previous = target.previousElementSibling;
                while (!previous.value && !previous.previousElementSibling?.value) {
                    previous = previous.previousElementSibling;
                }
                previous?.focus();
            }
        })
    }


})


let files = {
    name: "root",
    children: [{
        name: "folder 1",
        children: [{
            name: "file 1.1"
        }, {
            name: "file 1.2"
        }]
    }, {
        name: "folder 2",
        children: [
            { name: "file 2.1" },
            {
                name: "sub folder", children: [{
                    name: "sub file 1"
                }]
            }
        ]
    }]
}