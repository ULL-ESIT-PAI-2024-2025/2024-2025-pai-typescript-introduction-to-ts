/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc withot-parameter-properties.js
 *       This file contains the implementation of a simple program that
 *       demonstrates a constructor that not uses parameter properties in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a car
 */
class Car {
  private brand: string;
  // ... more properties

  /**
   * @description Constructor of the class Car
   * @param brand The brand of the car
   */
  public constructor(brand: string) {
    this.brand = brand;
  }

  /**
   * @description Method to get the brand of the car
   * @returns The brand of the car
   */
  public getBrand(): string {
    return this.brand;
  }  
}

