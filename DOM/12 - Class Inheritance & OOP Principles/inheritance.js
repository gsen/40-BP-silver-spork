document.addEventListener("DOMContentLoaded", function () {
    // inheritance - extending existing functionality 
    // code reuse
    class Person {
        name = "";
        age = 0;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello! I am ${this.name}`)
        }
    }

    let person = new Person("Gaurav", 29);
    person.greet();

    class Student extends Person {
        constructor(name, age, course) {
            super(name, age)
            this.course = course;
        }

        study() {
            console.log(`${this.name} is studying ${this.course}`)
        }
    }

    let student = new Student("Rahul", 21, "MERN")

    student.greet();
    student.study();
    console.log(student)

    class Employee extends Person {
        employeeId;
        constructor(name, age, employeeId) {
            super(name, age);
            this.employeeId = employeeId
        }

        print() {
            console.log(`Hi I'm ${this.name}, my employee id is:${this.employeeId}`)
        }
    }

})