{/* <section class="container">
    <header>
        <section class="dice"></section>
    </header>
    <section>
        <input placeholder="Guess the number" id="answer" type="text" />
    </section>
    <footer>
        <button id="roll">Roll</button>
        <button id="try-again" class="hidden">Try Again</button>
    </footer>
</section> */}

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}



document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("roll");
    const tryAgainButton = document.getElementById("try-again");
    const answer = document.getElementById("answer");
    const dice = document.querySelector(".dice");

    function toggleVisibility() {
        tryAgainButton.classList.toggle("hidden")
    }

    rollButton.addEventListener("click", function () {
        if (!answer.value) {
            alert("You need to specify a value")

        } else {
            const randomNumber = getRandomNumber();
            dice.textContent = randomNumber;
            if (randomNumber === answer.valueAsNumber) {
                alert("You won");
            } else {
                toggleVisibility();
            }
        }
    })

    tryAgainButton.addEventListener("click", function () {
        dice.textContent = "";
        answer.value = ""
        toggleVisibility();
    })

})
