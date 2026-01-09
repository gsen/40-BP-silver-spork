let carName = "WagonR";
let manufacturer = "Suzuki";
let yearOfManufacture = 2026;

console.log(carName, manufacturer, yearOfManufacture);

let car = {
    name: "WagonR",
    manufacturer: "Suzuki",
    yearOfManufacture: 2026,

    print() {
        console.log(this.name, this.manufacturer, this.yearOfManufacture)

    }
};

let car2 = {
    name: "i20",
    manufacturer: "Hyundai",
    yearOfManufacture: 2025,
    speed: 0,
    print() {
        console.log(this.name, this.manufacturer, this.yearOfManufacture)

    },

    start() {
        console.log(`Car - ${this.name} has started`);
        console.log("the car details are");
        this.print();

    },
    accelerate() {
        this.speed += 25;
        this.renderSpeed();

    },
    moveForward() {
        this.accelerate();
    },

    getSpeed() {
        console.log({ speed: this.speed })
    },

    renderSpeed() {
        let speedDisplayElement = document.getElementById("currentSpeed");
        speedDisplayElement.textContent = this.speed;
    }


}


car.print();

car2.print();
car2.start();

// car2.moveForward();
// car2.getSpeed();

document.addEventListener("DOMContentLoaded", function () {
    let start = document.getElementById("start");
    let accelerate = document.getElementById("accelerate");

    start.addEventListener("click", function () {
        car2.start();
    })
    accelerate.addEventListener("click", function () {
        car2.accelerate();

    })

})


const person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        city: "Pune",
        state: "MH",
        country: "India"
    }

}

const listPeople = [person, {
    firstName: "Jane",
    lastName: "Doe",
    address: {
        city: "Nasik",
        state: "MH",
        country: "India"
    }
}]

console.log(person, listPeople)

