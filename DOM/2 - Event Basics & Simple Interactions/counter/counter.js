document.addEventListener("DOMContentLoaded", function () {
    const incrementButton = document.querySelector("#increment");
    const decrementButton = document.querySelector("#decrement");
    let count = 0;
    let counterDisplayElement = document.querySelector("#count");
    let messageElement = document.querySelector(".message");
    function updateCount() {
        counterDisplayElement.textContent = count;
    }
    incrementButton.addEventListener("click", function () {
        if (count === 0) {
            updateMessage("")
        }
        count++;
        updateCount();
    })
    function updateMessage(message) {
        messageElement.textContent = message;
    }
    decrementButton.addEventListener("click", function () {
        if (count > 0) {
            count--;
        }
        else {
            updateMessage("count cannot be less than 0")
        }
        updateCount();
    })

})