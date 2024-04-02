class Person {
    name;
    age;

    setName(name) {
        this.name = name;
    }

    setAge(age) {
       
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person();



person1.setName('John');
person1.setAge(30);
person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.



