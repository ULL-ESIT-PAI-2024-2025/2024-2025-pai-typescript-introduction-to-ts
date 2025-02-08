/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @author Adrián Alejandro Padrón López | alu0101480213
 * @since 04/02/2025
 * @desc Interface extension example
 *       In this file you will find a interface extension example.
 *
 */

// The following example shows how to extend an interface with two different names.
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// The following example shows how to extend an interface with same names.
interface Person {
  name: string;
}

interface Person {
  age: number;
}

function main() {
  let address: AddressWithUnit = {
    name: 'John Doe',
    street: '123 Main Street',
    city: 'Springfield',
    country: 'USA',
    postalCode: '12345',
    unit: '456',
  };
  
  let person: Person = {
    name: 'John Doe',
    age: 30,
  };

  console.log(address);
  console.log(person);
}

main();