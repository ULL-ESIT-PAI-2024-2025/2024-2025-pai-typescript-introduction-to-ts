/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc simple-inheritance.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of simple inheritance in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Base class that represents an animal
 */
class Animal {
  protected name: string;

  /**
   * @description Constructor of the class Animal
   * @param name The name of the animal
   */
  public constructor(name: string) {
    this.name = name;
  }

  /**
   * @description Method to simulate the movement of the animal
   * @param distanceInMeters The distance to move
   */
  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

/**
 * @description Class that represents a cat and extends the Animal class
 */
class Cat extends Animal {
  private numberOfMeows: number;

  /**
   * @description Constructor of the class Cat
   * @param name The name of the cat
   */
  public constructor(name: string) {
    super(name);
    this.numberOfMeows = 0;
  }

  /**
   * @description Method to make the cat meow and increase the number of meows
   */
  public meow(): void {
    console.log('Meow! Meow!');
    this.numberOfMeows += 1;
  }

  /**
   * @description Method to show the number of meows of the cat
   */
  public showMeows(): void {
    console.log(`${this.name} has meowed ${this.numberOfMeows} times.`);
  }
}

function main() {
  const myCat = new Cat('Ripichi');

  myCat.move(5); // 'Ripichi moved 5m.'
  myCat.meow();  // 'Meow! Meow!'
  myCat.meow();  // 'Meow! Meow!'
  myCat.showMeows(); // 'Whiskers has meowed 2 times.'
}

main();