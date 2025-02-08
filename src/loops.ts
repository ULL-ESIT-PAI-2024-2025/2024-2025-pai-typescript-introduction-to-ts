/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Rodríguez Martín || alu0101464992
 * @since Feb 08 2025
 * @desc Loops
 */

'use strict';

// Classic for loop
function myClassicForLoop() {
  console.log('Classic for loop');
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

// for-in loop
function myForInLoop() {
  console.log('For-in loop');
  let person = { name: 'Diego', age: 20 };
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}

// for-of loop
function myForOfLoop() {
  console.log('For-of loop');
  let numbers = [1, 2, 3, 4, 5];
  for (let number of numbers) {
    console.log(number);
  }
}

// ForEach loop
function myForEachLoop() {
  console.log('ForEach loop');
  let numbers = [1, 2, 3, 4, 5];
  numbers.forEach((number) => {
    console.log(number);
  });
}

// while loop
function myWhileLoop() {
  console.log('While loop');
  let i: number = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
}