
function CarFn(name, manufacturer, yearOfManufacture) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.speed = 0;
    this.accelerate = function () {
        this.speed += 25;
    }
}

// ES6 +

class Car {
    speed = 0;
    constructor(name, manufacturer, yearOfManufacture) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
    }

    accelrate() {
        this.speed += 25;
    }

}

const car = new CarFn("Hector", "MG", 2023);
// CarFn.prototype.accelerate = fn(){}
console.log(car);

const car1 = new Car("Hector", "MG", 2023)
console.log(car1);

// diff between class vs fn constructor
// 1. class is easier to read and understand
// 2. Under the hood, it uses prototype
// 3. Methods are automatically added to the prototype

// getter and setter

class User {
    static user = null;
    constructor(name) {
        this._name = name;
    }

    get username() {
        return this._name.toUpperCase();
    }

    set username(newUsername) {
        if (newUsername.length < 4) {
            console.log("Username is short, should be greater than 4");

        } else {
            this._name = newUsername;
        }
    }

    static getLoggedInUser() {

        if (!User.user) {
            // static fn can only access static fields
            // console.log(this)
            // console.log(this._name)
            User.user = new User("john doe");
        }
        return User.user;
    }
}

let user = new User("gaurav");

let loggedInUser = User.getLoggedInUser()

// Math.floor(2.5)

class Example {
    publicProp = "xyz";
    #privateField = "privateFieldValue"

    getPrivateField() {
        return this.#privateField;
    }
}

const ex1 = new Example();

console.log(ex1.publicProp);
// console.log(ex1.#privateField);
console.log(ex1.getPrivateField())
