/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2024-2025
 *
 * @authors Eric Bermúdez Hernández, Adrián Alejandro Padrón López, Diego Rodríguez Martín
 * @since 03 de Febrero, 2025
 * @desc super.js
 *       This file contains the implementation of a simple program that
 *       demonstrates the use of the super keyword in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents an employee
 */
class Employee {
  protected name: string;
  protected salary: number;

  /**
   * @description Constructor of the class Employee
   * @param name The name of the employee
   * @param salary The salary of the employee
   */
  public constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  /**
   * @description Getter to get the details of the employee
   * @returns The details of the employee
   */
  public getDetails(): string {
    return `${this.name} earns $${this.salary} per year.`;
  }
}

/**
 * @description Class that represents a manager and extends the Employee class
 */
class Manager extends Employee {
  private teamSize: number;

  /**
   * @description Constructor of the class Manager
   * @param name The name of the manager
   * @param salary The salary of the manager
   * @param teamSize The size of the team managed by the manager
   */
  public constructor(name: string, salary: number, teamSize: number) {
    console.log(`Creating Manager: ${name}`); // ✅ Allowed before super()
    super(name, salary); // Must call super() before using 'this'
    this.teamSize = teamSize; // Not allowed before super()
  }

  /**
   * @description Getter to get the details of the manager
   * @returns The details of the manager
   */
  public getDetails(): string {
    return `${super.getDetails()} Manages a team of ${this.teamSize} people.`; // Using super.method()
  }
}

function main() {
  // Example usage
  const manager = new Manager('Alice', 75000, 10);
  console.log(manager.getDetails());
}

main();