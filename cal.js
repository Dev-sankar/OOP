class Calculator {
  constructor() {
    this.result = 0;
  }

  // Method to add two numbers
  add(a, b) {
    this.result = a + b;
  }

  // Method to subtract two numbers
  subtract(a, b) {
    this.result = a - b;
  }

  // Method to multiply two numbers
  multiply(a, b) {
    this.result = a * b;
  }

  // Method to divide two numbers
  divide(a, b) {
    if (b === 0) {
      console.error("Division by zero is not allowed.");
      return;
    }
    this.result = a / b;
  }

  // Method to get the current result
  getResult() {
    return this.result;
  }

  // Method to clear the result
  clear() {
    this.result = 0;
  }
}

// Usage of the Calculator class
const calculator = new Calculator();
calculator.add(5, 3);
console.log("Result after addition: " + calculator.getResult());

calculator.subtract(10, 2);
console.log("Result after subtraction: " + calculator.getResult());

calculator.multiply(4, 6);
console.log("Result after multiplication: " + calculator.getResult());

calculator.divide(20, 4);
console.log("Result after division: " + calculator.getResult());

calculator.divide(10, 0); // This will trigger an error message.

calculator.clear();
console.log("Result after clearing: " + calculator.getResult());





