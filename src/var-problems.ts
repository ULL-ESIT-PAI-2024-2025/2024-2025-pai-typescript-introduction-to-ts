/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Diego Rodríguez Martín || alu0101464992
 * @since Feb 08 2025
 * @desc Var problems
 */

'use strict';

function showVarProblem(): void {
  var userName: string = 'Diego';
  var userName: string = 'Adrian';
  console.log(userName);
}

function showHoisitingProblem(): void {
  console.log(age); // undefined
  var age: number = 20;
}

function showFunctionScopeProblem(): void {
  var age: number = 20;
  if (age >= 18) {
    var isAdult: boolean = true;
  }
  console.log(isAdult); // true
}