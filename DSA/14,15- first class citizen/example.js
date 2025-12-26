// function can be returned from another function

function outerFunction() {
    let someVal = "xyz";

    return function innerFunction() {
        return someVal;
    }
}

// function can be passed as a argument to another function.

function greeter(composer, firstName) {
    //.... do something

    composer();
}

function displayName() {
    /// does some work
    console.log("displayName called")
}

greeter(displayName, "Gaurav")


// function can be assigned to a variable

let addition = function add(x, y) {
    return x + y;
}


// let addition = add;

console.log(addition(2, 5))

// example of callback function

// document.addEventListener("click", function () {

// })

// there are two types of callbacks
// 1. synchronous 
// 2. asynchronous

let value = 0;

setTimeout(function () {
    value = 1;
    console.log("function called after sometime")
}, 3000)

console.log(value);

// higher order function

// which accepts another function as a parameter;

// Hello, John Doe

// Hola, John Doe

function greetMe(greetingMaker, firstName, lastName) {

    let greeting = greetingMaker();
    return `${greeting}, ${firstName} ${lastName}`
}

function spanishGreeter() {
    return 'Hola'
}

function englishGreeter() {
    return 'Hello';
}

function hindiGreeter() {
    return 'Namaste'
}

// here greetMe is a higher order function

// hindiGreeter, englishGreeter, spanishGreeter - are callback function

console.log(greetMe(hindiGreeter, "John", "Doe"))
console.log(greetMe(englishGreeter, "John", "Doe"))
console.log(greetMe(spanishGreeter, "John", "Doe"))



// what is a closure

function add(x) {
    let name = "xyz"
    return function (y) {
        console.log(name);
        return x + y;
    }
}

let add5 = add(5);

let add10 = add(10);

console.log(add5(2));
console.log(add5(10));

console.log(add10(2))
console.log(add10(7));

// create a greet me function which accepts lang as argument and returns the greeting
// based on that;

function greetMeWithLang(lang) {

    let greeting = lang === "en" ? "Hello" : lang === "hi" ? "Namaste" : "Wassup!"
    // return function printGreeting(firstName, lastName){
    //     return ....
    // }
    return function (firstName, lastName) {
        return `${greeting}, ${firstName} ${lastName}`
    }

}

let hindiGreeting = greetMeWithLang("hi");
console.log(hindiGreeting("Gaurav", "Sen"))
console.log(hindiGreeting("Jane", "Doe"))

let englishGreeting = greetMeWithLang("en");
console.log(englishGreeting("Gaurav", "Sen"));

let defaultGreeting = greetMeWithLang();
console.log(defaultGreeting("Gaurav", "Sen"))


console.log(
    greetMeWithLang("hi")("Sachin", "T")
)
console.log(
    greetMeWithLang("")("Sachin", "T")
)

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3))


function printMe(personDetails) {
    return function () {
        return personDetails()
    }
}

function displaySomething() {
    console.log("display something is called")
}
let someFunc = printMe(displaySomething);
someFunc();




