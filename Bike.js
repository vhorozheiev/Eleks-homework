import Vehicle from './vehicle.js';

export default class Bike extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "bike";
    }

    showMaxSpeed(){
        console.log(`Max speed: ${this.maxSpeed}`);
    }
}