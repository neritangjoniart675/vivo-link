/* 
Filename: sophisticated_code.js
Content: Complex Web Application
*/

// Define a class for User
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  // Method to display user details
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Email: ${this.email}`);
  }
}

// Create an array of user objects
const users = [
  new User("John Doe", 25, "john@example.com"),
  new User("Jane Smith", 30, "jane@example.com"),
  new User("Mike Johnson", 35, "mike@example.com")
];

// Function to display all user details
function displayAllUsers() {
  for (let user of users) {
    user.displayDetails();
    console.log("------------------");
  }
}

// Define a class for Product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Method to calculate total value of product
  calculateTotalValue() {
    return this.price * this.quantity;
  }
}

// Create an array of product objects
const products = [
  new Product("Item 1", 10, 2),
  new Product("Item 2", 15, 3),
  new Product("Item 3", 20, 1)
];

// Function to display all product details
function displayAllProducts() {
  for (let product of products) {
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Quantity: ${product.quantity}`);
    console.log(`Total Value: $${product.calculateTotalValue()}`);
    console.log("------------------");
  }
}

// Perform some operations
displayAllUsers();
console.log("************");
displayAllProducts();
console.log("************");

// Define a function to perform a complex task
function complexTask() {
  let sum = 0;

  for (let i = 1; i <= 100; i++) {
    sum += i;
  }

  return sum;
}

 console.log(`Sum of numbers from 1 to 100: ${complexTask()}`);

 // Many more lines of code...
 // ...
 // ...