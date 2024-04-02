class Animal {
    speak() {
      console.log("The animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log("The dog barks.");
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log("The cat meows.");
    }
  }
  
  function animalSpeaks(animal) {
    animal.speak();
  }
  
  const animal = new Animal();
  const dog = new Dog();
  const cat = new Cat();
  
  animalSpeaks(animal); // Output: "The animal makes a sound."
  animalSpeaks(dog);    // Output: "The dog barks."
  animalSpeaks(cat);    // Output: "The cat meows."
  