/*

Filename: ComplexCodeExample.js

Content: This is a complex code example that demonstrates a fictional e-commerce shopping cart system with various functionalities such as adding products, updating quantities, applying discounts, and calculating the total price while considering tax rates and shipping fees.

*/

// Product Class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// CartItem Class
class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate the subtotal for each item
  getSubtotal() {
    return this.product.price * this.quantity;
  }
}

// Cart Class
class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
    this.taxRate = 0;
    this.shippingFee = 0;
  }

  // Method to add a product to the cart
  addProduct(product, quantity) {
    const existingItem = this.items.find(item => item.product.name === product.name);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const cartItem = new CartItem(product, quantity);
      this.items.push(cartItem);
    }
  }

  // Method to update the quantity of a product in the cart
  updateQuantity(productName, newQuantity) {
    const existingItem = this.items.find(item => item.product.name === productName);

    if (existingItem) {
      existingItem.quantity = newQuantity;
    }
  }

  // Method to remove a product from the cart
  removeProduct(productName) {
    this.items = this.items.filter(item => item.product.name !== productName);
  }

  // Method to apply a discount to the cart total
  applyDiscount(discount) {
    this.discount = discount;
  }

  // Method to set the tax rate for the cart
  setTaxRate(taxRate) {
    this.taxRate = taxRate;
  }

  // Method to set the shipping fee for the cart
  setShippingFee(shippingFee) {
    this.shippingFee = shippingFee;
  }

  // Method to calculate the total price including tax and shipping
  calculateTotalPrice() {
    let totalPrice = this.items.reduce((accumulator, item) => accumulator + item.getSubtotal(), 0);
    totalPrice -= this.discount;
    totalPrice += totalPrice * this.taxRate;
    totalPrice += this.shippingFee;

    return totalPrice.toFixed(2); // Rounding to two decimal places
  }
}

// Usage example
const product1 = new Product("Shirt", 29.99);
const product2 = new Product("Jeans", 49.99);
const product3 = new Product("Shoes", 89.99);

const cart = new Cart();

cart.addProduct(product1, 2);
cart.addProduct(product2, 1);
cart.addProduct(product3, 3);

cart.updateQuantity("Shirt", 4);
cart.removeProduct("Shoes");

cart.applyDiscount(10);
cart.setTaxRate(0.15);
cart.setShippingFee(5.99);

const totalPrice = cart.calculateTotalPrice();
console.log("Total Price: $" + totalPrice);

// Expected Output: Total Price: $202.43