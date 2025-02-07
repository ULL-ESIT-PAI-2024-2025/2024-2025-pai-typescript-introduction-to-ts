/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc templates.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of templates in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a pair of elements of different types T and U
 * @template T The type of the first element
 * @template U The type of the second element
 */
class Pair<T, U> {
  private first: T;
  private second: U;

  /**
   * @description Constructor of the class Pair
   * @param first The first element of the pair
   * @param second The second element of the pair
   */
  public constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  /**
   * @description Method to display the pair
   */
  public display(): void {
    console.log(`First: ${this.first}, Second: ${this.second}`);
  }
}

function main() {
  // Creating instances with different types
  let numberPair = new Pair<number, number>(5, 10);
  let stringNumberPair = new Pair<string, number>('Age', 30);
  // Using the display method
  numberPair.display();         // Output: First: 5, Second: 10
  stringNumberPair.display();   // Output: First: Age, Second: 30
}

main();