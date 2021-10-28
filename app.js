class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo() {
        console.log(`Name: ${this.model}; Year: ${this.year}; Max Speed: ${this.maxSpeed};`);
    }
}

class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }
    transportPeople() {
        console.log("I am starting transporting passengers");
    }
    static setColor(color) {
        this.color = color;
        console.log(`Color: ${this.color}`);
    }

    displayInfo() {
        console.log(`Name: ${this.model}; Year: ${this.year}; Max Speed: ${this.maxSpeed}; Color: ${this.color}`);
    }
}

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer() {
        console.log("I am starting transporting heavy container");
    }
}

let car = new Car("Opel", 2005, 180);
car.transportPeople();
//car.setColor("green");  // error if we call static method on object
Car.setColor("red");  // it works if we call static method on Class
car.displayInfo(); // override metod

let truck = new Truck("Man", 2003, 160);
truck.transportContainer();
truck.displayInfo(); // call father's method