document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form?.addEventListener("submit", function (event) {
        event.preventDefault();
        let formData = new FormData(this);
        const name = formData.get("name");
        const email = formData.get("email");
        const query = formData.get("query");

        const status = document.getElementById("status");
        status.textContent = "saving..."
        saveQuery({ name, email, query }).then((result) => {
            console.log(result);
            status.textContent = "data saved"
        }).catch(error => {
            status.textContent = error;
        })
    })


    function saveQuery(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                try {

                    let queries = localStorage.getItem("queries") ? JSON.parse(localStorage.getItem("queries")) : null;
                    if (!queries?.length) {
                        queries = [];
                    }
                    queries.push(data);
                    localStorage.setItem("queries", JSON.stringify(queries));
                    resolve(data);
                } catch (ex) {
                    reject(ex)
                }
            }, 3000);
        })
    }

    function getQueryByEmail(email) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {

                const queries = JSON.parse(localStorage.getItem("queries"));
                let result = queries.find(query => query.email === email);
                if (result) {
                    resolve(result)
                } else {
                    reject("No data found");
                }
            }, 2000);
        })
    }

    function showResults(query) {
        const resultSection = document.getElementById("result")
        if (query) {
            const name = document.createElement("p");
            name.textContent = query.name;

            const email = document.createElement("p");
            email.textContent = query.email;

            const question = document.createElement("p");
            question.textContent = query.query;

            resultSection.replaceChildren(name, email, question)
        }
    }

    const showError = reason => {
        const resultSection = document.getElementById("result")

        resultSection.replaceChildren(reason)
    }

    function showLoader() {
        const status = document.querySelector("#status");
        status.textContent = "Fetching results..."
    }

    function clearLoader() {
        const status = document.querySelector("#status");
        status.textContent = ""
    }

    document.querySelector("#search")?.addEventListener("click", function () {
        const searchTerm = document.querySelector("#search-term");
        const resultSection = document.getElementById("result")
        resultSection.replaceChildren();
        showLoader();
        getQueryByEmail(searchTerm?.value)
            .then(showResults)
            .catch(showError)
            .finally(clearLoader)


    })

})