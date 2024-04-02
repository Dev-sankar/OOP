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
  
  // Polymorphism in action
  const animal = new Animal();
  const dog = new Dog();
  const cat = new Cat();
  
  animal.speak(); // Output: "The animal makes a sound."
  dog.speak();    // Output: "The dog barks."
  cat.speak();    // Output: "The cat meows."
  
  // Polymorphism using a common function
  function makeAnimalSpeak(animal) {
    animal.speak();
  }
  
  makeAnimalSpeak(animal); // Output: "The animal makes a sound."
  makeAnimalSpeak(dog);    // Output: "The dog barks."
  makeAnimalSpeak(cat);    // Output: "The cat meows."
  





 