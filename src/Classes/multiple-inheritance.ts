/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc multiple-inheritance.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of multiple inheritance in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Interface that defines the structure of an animal class
 */
interface AnimalInterface {
  makeSound(): void;
}

/**
 * @description Class that represents a living being 
 */
class LivingBeing {
  /**
   * @description Constructor of the class LivingBeing
   * @param name The name of the living being
   */
  public constructor(public name: string) {}

  /**
   * @description Method to simulate breathing
   */
  public breathe(): void {
    console.log(`${this.name} is breathing.`);
  }
}

/**
 * @description Class that represents a dog
 */
class Dog extends LivingBeing implements AnimalInterface {
  private species: string;

  /**
   * @description Constructor of the class Dog
   * @param name The name of the dog
   * @param species The species
   */
  public constructor(name: string, species: string) {
    super(name); // Call parent class constructor
    this.species = species;
  }

  /**
   * @description Method to get the species of the dog
   * @returns The species of the dog
   */
  public getSpecies(): string {
    return this.species;
  }

  /**
   * @description Method to set the species of the dog
   */
  public makeSound(): void {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}

function main() {
  // Creating an instance of Dog
  const myDog = new Dog('Buddy', 'Canine');

  myDog.breathe(); // Inherited from LivingBeing
  myDog.makeSound(); // Implemented from Animal interface

  console.log(`Species: ${myDog.getSpecies}`); // Defined in Animal interface
}

main();