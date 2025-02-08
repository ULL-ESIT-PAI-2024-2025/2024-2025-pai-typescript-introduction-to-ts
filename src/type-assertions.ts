/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Rodríguez Martín || alu0101464992
 * @since Feb 08 2025
 * @desc Type assertions
 */

'use strict';

// Compilation Time Error
function compileTimeError(): void {
  let price: string = '100';
  let numberPrice: number = price as number;
}