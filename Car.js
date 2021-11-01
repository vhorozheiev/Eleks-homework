import Vehicle from './vehicle.js';

export default class Car extends Vehicle {
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
    //override method
    displayInfo() {
        console.log(`Name: ${this.model}; Year: ${this.year}; Max Speed: ${this.maxSpeed}; Color: ${this.color}`);
    }
}

