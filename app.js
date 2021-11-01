import Vehicle from './vehicle.js';
import Car from './car.js';
import Truck from './truck.js';
import Bike from './bike.js';

let car = new Car("Opel", 2005, 180);
//car.setColor("green");  // error if we call static method on object
Car.setColor("red");  // it works if we call static method on Class
car.displayInfo(); // override metod
car.transportPeople(); //call method from class

let truck = new Truck("Man", 2003, 160);
truck.displayInfo(); // call father's method
truck.transportContainer(); //call method from class

let bike = new Bike("Honda", 2010, 240);
bike.showMaxSpeed(); //call method from class