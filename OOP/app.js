class Vehicle {
	constructor(a,b,c) {
		this.make = a
		this.model = b
		this.year = c
	}
	
	honk() {
		return "beep"
	}

	toString() {
		return (`This vehicle is a ${this.make} ${this.model}, from ${this.year}`)
	}
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); 
myFirstVehicle.toString();

class Car extends Vehicle {
	numWheels() {
		return 4
	}
}

let myFirstCar = new Car("Jeep", "Wrangler", 2018)

class Motorcycle extends Vehicle {
	numWheels() {
		return 2
	}
	revEngine() {
		return "VROOOOOM"
	}
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
	constructor(capacity) {
		this.vehicles = []
		this.capacity = capacity
	}

	add(newVehicle) {
		if (!(newVehicle instanceof Vehicle)) {
		  return "Only vehicles are allowed in here!";
		}
		if (this.vehicles.length >= this.capacity) {
		  return "Sorry, we're full.";
		}
		this.vehicles.push(newVehicle);
		return "Vehicle added!";
	  }

}