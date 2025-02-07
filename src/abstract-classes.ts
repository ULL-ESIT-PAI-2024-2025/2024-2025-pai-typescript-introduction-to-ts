/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Eric Bermúdez Hernández
 * @since 03 de Febrero, 2025
 * @desc abstract-classes.js
 *       Programa de ejemplo que ilustra la herencia de clases con clases abstractas
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Clase abstracta de la que heredan las hijas con un método abstracto
 * y un método concreto. Ambos que heredan las clases hijas
 */
abstract class Algorithm {
  protected nameAlgorithm: string;

  public constructor(nameAlgorithm: string) {
    this.nameAlgorithm = nameAlgorithm;
  }

  // Abstract method that must be implemented by subclasses
  protected abstract sort(data: number[]): number[];

  // Concrete method shared by all subclasses
  public describe(): void {
    console.log(`This is the ${this.nameAlgorithm} sorting algorithm.`);
  }
}

/**
 * @description Clase hija que hereda de la clase abstracta, implementa su versión
 * del constructor y del método abstracto sort
 */
class BubbleSort extends Algorithm {
  public constructor() {
    super('BubbleSort');
  }

  // Implementing the abstract method
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
 * @description Clase hija que hereda de la clase abstracta, implementa su versión
 * del constructor y del método abstracto sort
 */
class QuickSort extends Algorithm {
  constructor() {
    super('QuickSort');
  }

  // Implementing the abstract method
  sort(data: number[]): number[] {
    if (data.length <= 1) return data;
    let pivot = data[0];
    let left = data.slice(1).filter(n => n < pivot);
    let right = data.slice(1).filter(n => n >= pivot);
    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

// Example usage
const bubble = new BubbleSort();
const quick = new QuickSort();

bubble.describe();
console.log("Sorted:", bubble.sort([5, 3, 8, 1, 2]));

quick.describe();
console.log("Sorted:", quick.sort([5, 3, 8, 1, 2]));