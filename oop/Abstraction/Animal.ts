abstract class Animal {
    // Abstract method (must be implemented in derived classes)
    abstract makeSound(): void;

    // Concrete method
    move(): void {
        console.log("The animal moves...");
    }
}

class Dog extends Animal {
    // Implementing the abstract method
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    // Implementing the abstract method
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}

// You can't create an instance of an abstract class
// let animal = new Animal(); // This would cause a compilation error

// Create instances of derived classes
let dog = new Dog();
let cat = new Cat();

dog.makeSound(); // Output: Woof! Woof!
dog.move();      // Output: The animal moves...

cat.makeSound(); // Output: Meow! Meow!
cat.move();      // Output: The animal moves...
