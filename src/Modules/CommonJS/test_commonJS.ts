/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián Alejandro Padrón López | alu0101480213
 * @since 04/02/2025
 * @desc CommonJS module example
 *       In this file you will find a example of CommonJS import.
 *
 */

const modulo1 = require('./source_commonJS.ts');

function main() {
  console.log(modulo1.saludar('Juan')); // Hola, Juan!
  console.log(modulo1.PI); // 3.14159
}

main();