/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián Alejandro Padrón López | alu0101480213
 * @since 04/02/2025
 * @desc Basic interface example
 *       In this file you will find a basic interface example.
 *
 */

interface Person {
  name: string;
  age: number;
  sex: string;
  nationality: string;
}

function main() {
  let person: Person = {
    name: 'John Doe',
    age: 30,
    sex: 'Male',
    nationality: 'USA'
  }
  console.log(person); 
}

main();