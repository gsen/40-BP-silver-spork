
function Config() {
    this.theme = "dark";
    this.value = "system";
}

let config = new Config();
console.log(config);
config


function Car(name, manufacturer, yearOfManufacture) {
    this.name = name;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.speed = 0;
    this.accelerate = function () {
        this.speed += 25;
    }
}


let car1 = new Car("WagonR", "Suzuki", 2026)
let car2 = new Car("i20", "Hyundai", 2025)

console.log(car1, car2);

console.log(JSON.stringify(car1))

car1.accelerate();

console.log(car1);

