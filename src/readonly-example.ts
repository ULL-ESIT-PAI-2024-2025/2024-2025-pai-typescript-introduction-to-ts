/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc readonly-example.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of the readonly modifier in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a person
 */
class Person {
  public readonly DNI: string = '23123456W'
}

function main() {
  let person = new Person();
  person.DNI = '43573212K'; // Error: Cannot assign to 'DNI' because it is a read-only property.
}

main();