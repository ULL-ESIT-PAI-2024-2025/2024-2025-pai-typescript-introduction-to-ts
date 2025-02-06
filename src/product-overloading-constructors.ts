class Product {
  name: string;
  price: number;
  description: string; // New optional property

  constructor(name: string, price?: number, description?: string) {
    this.name = name;
    this.price = price || 0; // Default value: 0 if price is not provided
    this.description = description || ""; // Default value: empty string if description is not provided
  }
}

// Create product instances with different parameter combinations
const product1 = new Product("T-shirt", 20, "100% Cotton");
const product2 = new Product("Pants", 35); // Optional price
const product3 = new Product("Shoes"); // Optional price and description