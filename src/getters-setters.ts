/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc getters-setters.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of getters and setters in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a player
 */
class Player {
  /**
   * @description Constructor of the class Player
   * @param name The name of the player
   */
  public constructor(private name: string) {}

  /**
   * @description Getter method for the player's name
   * @returns The name of the player
   */
  public get playerName(): string {
    return this.name;
  }

  /**
   * @description Setter method for the player's name
   * @param newValue The new name of the player
   */
  public set playerName(newValue: string) { // A 'set' accessor cannot have a return type annotation
    this.name = newValue;
  }
}

function main() {
  let playerOne = new Player('Rachel');
  playerOne.playerName = 'Alice';
}

main();