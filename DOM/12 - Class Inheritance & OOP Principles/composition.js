// inheritance - represents "is a"relationship
// compositon - "has a" relationship

class Tyre {
    constructor(width, company = "MRF") {
        this.width = width;

        this.company = company
    }
}
class Engine {

    constructor(engineCC) {
        this.engineCC = engineCC;
    }
    start() {
        console.log("Engine has started");

    }
}

class Car {
    constructor(name, engineCC) {
        this.name = name;
        this.engine = new Engine(engineCC)
        this.tyre = new Tyre(120)
    }

    drive() {
        this.engine.start();

        console.log(`${this.name} is moving, the engine capacity is:${this.engine.engineCC}`);

    }
}

// Car "has a" engine

const car = new Car("Dzire", 1000)
car.drive();
console.log(car)

