/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc abstract-classes.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of abstract classes in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Abstract class that defines the structure of a sorting algorithm
 */
abstract class Algorithm {
  protected nameAlgorithm: string;

  /**
   * @description Constructor of the class Algorithm
   * @param nameAlgorithm the name of the algorithm
   */
  protected constructor(nameAlgorithm: string) {
    this.nameAlgorithm = nameAlgorithm;
  }

  /**
   * @description Abstract method that must be implemented by the subclasses
   * @param data The array to sort
   * @returns The sorted array
   */
  protected abstract sort(data: number[]): number[];

  /**
   * @description Method that prints the name of the algorithm
   * to the console
   */
  public describe(): void {
    console.log(`This is the ${this.nameAlgorithm} sorting algorithm.`);
  }
}

/**
 * @description Subclass that extends the Algorithm class and implements
 * the Bubble Sort algorithm
 */
class BubbleSort extends Algorithm {
  public constructor() {
    super('BubbleSort');
  }

  /**
   * @description Method that sorts the array using the Bubble Sort algorithm
   * @param data The array to sort
   * @returns The sorted array
   */
  public sort(data: number[]): number[] {
    let array = [...data];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
}

/**
 * @description Subclass that extends the Algorithm class and implements
 * the Quick Sort algorithm
 */
class QuickSort extends Algorithm {
  public constructor() {
    super('QuickSort');
  }

  /**
   * @description Method that sorts the array using the Quick Sort algorithm
   * @param data The array to sort
   * @returns The sorted array
   */
  public sort(data: number[]): number[] {
    if (data.length <= 1) return data;
    let pivot = data[0];
    let left = data.slice(1).filter(n => n < pivot);
    let right = data.slice(1).filter(n => n >= pivot);
    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

function main() {
  // Example usage
  const bubble = new BubbleSort();
  const quick = new QuickSort();

  bubble.describe();
  console.log('Sorted:', bubble.sort([5, 3, 8, 1, 2]));

  quick.describe();
  console.log('Sorted:', quick.sort([5, 3, 8, 1, 2]));
}

main();