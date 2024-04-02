// Define the parent class
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

// Define the child class
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }
}

// Create an instance of the parent class
const animal = new Animal('Animal', 5);
animal.eat(); // Output: Animal is eating.
animal.sleep(); // Output: Animal is sleeping.

// Create an instance of the child class
const dog = new Dog('Buddy', 3, 'Golden Retriever');
dog.eat(); // Output: Buddy is eating.
dog.sleep(); // Output: Buddy is sleeping.
dog.bark(); // Output: Buddy is barking.




