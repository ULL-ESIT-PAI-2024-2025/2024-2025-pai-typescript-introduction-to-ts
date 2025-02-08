/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Rodríguez Martín || alu0101464992
 * @since Feb 08 2025
 * @desc Nullish coalescing operator
 */

'use strict';

function differenceWithOr(): void {
  const myText: string = '';

  const noFalsyText = myText || 'Default Text';
  console.log(noFalsyText); // Default Text

  const preservingFalsyText = myText ?? 'Default Text';
  console.log(preservingFalsyText); // ''
}

function realtionshipWithOptionalChaining(): void {
  const foo = {
    someProperty: 'hi'
  };

  console.log(foo.someProperty?.toUpperCase() ?? 'Default'); // HI
  console.log(foo.someOtherProperty?.toUpperCase() ?? 'Default');
  // There is no property
}