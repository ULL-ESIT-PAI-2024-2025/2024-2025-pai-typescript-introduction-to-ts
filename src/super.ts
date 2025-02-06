// Parent class
class Employee {
  protected name: string;
  protected salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getDetails(): string {
    return `${this.name} earns $${this.salary} per year.`;
  }
}

// Derived class
class Manager extends Employee {
  private teamSize: number;

  constructor(name: string, salary: number, teamSize: number) {
    console.log(`Creating Manager: ${name}`); // ✅ Allowed before super()
    super(name, salary); // Must call super() before using 'this'
    this.teamSize = teamSize; // Not allowed before super()
  }

  getDetails(): string {
    return `${super.getDetails()} Manages a team of ${this.teamSize} people.`; // Using super.method()
  }
}

// Example usage
const manager = new Manager("Alice", 75000, 10);
console.log(manager.getDetails());
