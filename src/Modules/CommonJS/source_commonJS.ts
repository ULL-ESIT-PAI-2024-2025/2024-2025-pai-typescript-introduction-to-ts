/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián Alejandro Padrón López | alu0101480213
 * @since 04/02/2025
 * @desc CommonJS module example
 *       In this file you will find a example of a CommonJS module that exports a function and a constant.
 *
 */

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

module.exports = {
  saludar: saludar,
  PI: 3.14159
};