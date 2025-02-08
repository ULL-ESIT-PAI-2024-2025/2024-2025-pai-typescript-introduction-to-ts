/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Rodríguez Martín || alu0101464992
 * @since Feb 08 2025
 * @desc Non-null assertion
 */

'use strict';

function duplicate(text: string | null): string {
  if (text === null || text === undefined) {
    text = '';
  }
  return text.concat(text);
}

function nonNullAssertion(text: string | null): string {
  return text!.concat(text!);
}