/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Rodríguez Martín || alu0101464992
 * @since Feb 08 2025
 * @desc Functions
 */

'use strict';

// Declared functions
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Anonymous functions
let sum = function (left: number, right: number): number {
  return left + right;
}

// Arrow function
const factorial = (number: number): number => {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

// Optional Parameters
function greetOptional(name: string, id?: number): string {
  if (id) {
    return `Hello, ${name}! Your id is ${id}`;
  }
  return `Hello, ${name}!`;
}

function main(): void {
  console.log(sum(2, 3));
}