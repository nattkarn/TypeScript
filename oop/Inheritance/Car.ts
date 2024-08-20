// Base class Vehicle
class Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log(`${this.make} ${this.model} is starting...`);
    }

    stop(): void {
        console.log(`${this.make} ${this.model} is stopping...`);
    }

    getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

// Derived class Car extending Vehicle
class Car extends Vehicle {
    numberOfDoors: number;

    constructor(make: string, model: string, year: number, numberOfDoors: number) {
        super(make, model, year); // Call the constructor of the base class
        this.numberOfDoors = numberOfDoors;
    }

    openTrunk(): void {
        console.log(`Opening the trunk of the ${this.getDetails()}`);
    }

    // Overriding the start method
    start(): void {
        console.log(`The car ${this.getDetails()} is starting with a roar!`);
    }
}

// Usage example
const myCar = new Car('Toyota', 'Camry', 2021, 4);
console.log(myCar.getDetails()); // Output: 2021 Toyota Camry
myCar.start(); // Output: The car 2021 Toyota Camry is starting with a roar!
myCar.openTrunk(); // Output: Opening the trunk of the 2021 Toyota Camry
myCar.stop(); // Output: Toyota Camry is stopping...
