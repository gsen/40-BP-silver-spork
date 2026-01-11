// call
// apply
// bind


window.firstName = "Gaurav"
window.lastName = "Sen"

function printFullName() {
    console.log(`${this.firstName} ${this.lastName}`)
}


const person2 = {
    firstName: "Rahul",
    lastName: ""
}

printFullName();


printFullName.call(person2)


class Person {
    firstName = "Gaurav"
    lastName = "Sen"
    printFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    printAge(age, secondpara) {
        console.log(secondpara)
        return `${this.firstName}'s age is ${age}`
    }
    addMarks(firstSubjectMarks, secondSubjectMarks) {

        return `The total marks for ${this.firstName} is: ${firstSubjectMarks + secondSubjectMarks}`;
    }
}

const person = new Person();

// using the call function we are able to pass set the value of this
// explicitly

// using this we can achieve function borrowing

console.log(person.printFullName())
console.log(person.printAge(23))



// function borrowing
console.log(person.printFullName.call(person2))
console.log(person.printAge.call(person2, 29, "secondParam"))

// apply

console.log(person.printAge.apply(person2, [32, "another param"]))



// bind

// you can set this context
// multiple params can be passed using comma separated values
// creates a newFunction with the values you have passed
// the values for the newFunction always remain fixed whenever the newFunction is called.

console.log(person.addMarks(20, 30))



const newFunction = person.addMarks.bind(person2, 30)
console.log(newFunction(20));
console.log(newFunction(40));
console.log(newFunction(60));

const anotherFn = person.addMarks.bind(person2, 50)
console.log(anotherFn(10))

// depending on what you want to achieve you can create new behaviour using existing functionality


// HW - find out which patterns you can create using the bind function.








