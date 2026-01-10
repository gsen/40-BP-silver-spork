class ButtonController {
    #button = null;
    constructor(buttonId) {
        this.#button = document.getElementById(buttonId)
    }

    set text(updatedText) {
        if (updatedText) {
            this.#button.textContent = updatedText;
        }
    }

    addClickHandler() {
        this.#button.addEventListener("click", () => {
            this.text = "clicked!"
        })
    }
}

let button = new ButtonController("button-id");
button.addClickHandler();
button.text = "some text";
// button.#button
