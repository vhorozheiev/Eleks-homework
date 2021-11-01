import Vehicle from './vehicle.js';

export default class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }
    transportContainer() {
        console.log("I am starting transporting heavy container");
    }
}