/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc static-members.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of static members in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a counter
 */
class Counter {
  private static count: number = 0; // Static property

  /**
   * @description Constructor of the class Counter that increments the counter
   * each time an object is created
   */
  public constructor() {
    Counter.count++; // Increment the counter each time an object is created
  }

  /**
   * @description Static method to get the number of objects created
   * @returns The number of objects created
   */
  public static getCount(): number { // Static method
    return Counter.count;
  }
}

function main() {
  const object1 = new Counter();
  const object2 = new Counter();
  const object3 = new Counter();
  
  // Using the static method to get the number of objects created 
  // without an object of the Counter class
  console.log(Counter.getCount()); // Prints 3 (three objects have been created)
  console.log(object1, object2, object3); // Ahora las variables se "usan"
}

main();