/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián Alejandro Padrón López | alu0101480213
 * @since 04/02/2025
 * @desc ES Modules module example
 *       In this file you will find a example of ES Modules import.
 *
 */

import { saludar, PI } from './source_ESModules';

function main() {
  console.log(PI); // 3.14159
  console.log(saludar('Juan')); // Hola, Juan!
}

main();