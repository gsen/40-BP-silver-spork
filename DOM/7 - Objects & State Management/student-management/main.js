let app = {
    students: [{
        name: "Jacob",
        age: 18,
        gender: "male"
    }, {
        name: "Jenny",
        age: 19,
        gender: "female"
    }],

    initialize() {
        this.registerEvents();
    },

    registerEvents() {
        let formElement = document.getElementById("new-student-form");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);
            const newStudent = {
                name: data.get("name"),
                age: data.get("age"),
                gender: data.get("gender")
            }
            this.addStudent(newStudent);
        })

    },

    addStudent(student) {
        this.students.push(student);
        this.renderStudents();
    },
    renderStudents() {
        const containerList = document.getElementById("list-container");
        const list = document.createElement("ul");

        const headers = document.createElement("li");
        list.append(headers);
        ["Name", "Age", "Gender"].forEach(item => {
            let label = document.createElement("span");
            label.textContent = item;
            headers.append(label);
        })
        for (let student of this.students) {
            let listItem = document.createElement("li");
            let nameElement = document.createElement("span");
            nameElement.textContent = student.name;

            let ageElement = document.createElement("span");
            ageElement.textContent = student.age;

            let genderElement = document.createElement("span");
            genderElement.textContent = student.gender;

            listItem.append(nameElement, ageElement, genderElement);
            list.append(listItem)
        }
        containerList.replaceChildren(list);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    app.initialize();
    app.renderStudents();
})