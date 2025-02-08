/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián Alejandro Padrón López | alu0101480213
 * @since 04/02/2025
 * @desc Interface intersection example
 *       In this file you will find a bad interface intersection example.
 *
 */

interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
  color: number; // Same property name but different type
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
  console.log(`Drawing a ${circle.color} circle with radius ${circle.radius}`);
}

function main() {
  let circle: ColorfulCircle = { 
    color: 'blue', 
    radius: 42 
  };
  draw(circle);
}

main();