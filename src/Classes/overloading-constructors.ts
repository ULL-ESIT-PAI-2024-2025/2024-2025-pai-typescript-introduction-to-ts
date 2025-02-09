/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc product-overloading-constructors.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of overloading constructors in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a product
 */
class Product {
  private name: string;
  private price: number;
  private description: string; 

  /**
   * @description Constructor of the class Product
   * @param name The name of the product
   * @param price The price of the product (optional)
   * @param description The description of the product (optional)
   */
  public constructor(name: string, price?: number, description?: string) {
    this.name = name;
    this.price = price || 0; // Default value: 0 if price is not provided
    this.description = description || ''; // Default value: empty string if description is not provided
  }

  /**
   * @description Method that prints the details of the product
   */
  public describe(): void {
    console.log(`This is a ${this.name} that costs $${this.price}. ${this.description}`);
  }
}

function main() {
  // Create product instances with different parameter combinations
  const product1 = new Product('T-shirt', 20, '100% Cotton');
  const product2 = new Product('Pants', 35); // Optional price
  const product3 = new Product('Shoes'); // Optional price and description
  console.log(product1, product2, product3);
}

main();