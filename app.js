import Vehicle from './vehicle.js';
import Car from './car.js';
import Truck from './truck.js';
import Bike from './bike.js';

let car = new Car("Opel", 2005, 180);
car.transportPeople();
//car.setColor("green");  // error if we call static method on object
Car.setColor("red");  // it works if we call static method on Class
car.displayInfo(); // override metod

let truck = new Truck("Man", 2003, 160);
truck.transportContainer();
truck.displayInfo(); // call father's method

let bike = new Bike("Honda", 2010, 240);
bike.showMaxSpeed();