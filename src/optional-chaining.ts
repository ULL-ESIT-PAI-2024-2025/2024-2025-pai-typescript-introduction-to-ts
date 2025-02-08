/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Rodríguez Martín || alu0101464992
 * @since Feb 08 2025
 * @desc Optional chaining
 */

'use strict';

function main() {
  let object = { first: { second: { third: 'value' } } };
  const nestedProperty = object === null || 
  object === undefined ? undefined : object.first.second.third;

  const nestedPropertyOptionalChaining = object?.first?.second?.third;
}

function invalidCases() {
  const object = { size: 2 };
  object?.size = 3; // Compilation Error

  new Number(10)?.toFixed(); // Compilation Error
}