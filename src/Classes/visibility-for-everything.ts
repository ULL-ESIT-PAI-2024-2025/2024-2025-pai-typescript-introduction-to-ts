/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc visibility-for-everything.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of visibility modifiers in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a person
 */
class PersonVisibility {
  private name: string;
  private age: number;

  /**
   * @description Constructor of the class Person
   * @param name name of the person
   * @param age age of the person
   */
  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  /**
   * @description Method to greet the person, showing its name in the console
   */
  public greet(): void {
    console.log(`Hello, I am ${this.name}`);
  }

  /**
   * @description Method to get the age of the person
   * @returns The age of the person
   */
  protected getAge(): number {
    return this.age;
  }

  /**
   * @description Method that cannot be accessed from outside the class that
   * shows a secret message in the console
   */
  private secretMessage(): void {
    console.log('This is a secret message!');
  }
}

function main() {
  let person = new PersonVisibility('Alice', 30);
  person.greet();
  console.log(`The age of the person is: ${person.getAge()}`); // ❌ This is not allowed
  person.secretMessage(); // ❌ This is not allowed
}

main();