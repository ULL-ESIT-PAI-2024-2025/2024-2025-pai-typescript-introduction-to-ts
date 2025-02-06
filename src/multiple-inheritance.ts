// Interface defining animal behavior
interface AnimalInterface {
  species: string;
  makeSound(): void;
}

// Base class representing any living being
class LivingBeing {
  constructor(public name: string) {}

  breathe(): void {
    console.log(`${this.name} is breathing.`);
  }
}

// Dog class inherits from LivingBeing and implements Animal interface
class Dog extends LivingBeing implements AnimalInterface {
  species: string;

  constructor(name: string, species: string) {
    super(name); // Call parent class constructor
    this.species = species;
  }

  makeSound(): void {
    console.log(`${this.name} barks: Woof! Woof!`);
  }
}

// Creating an instance of Dog
const myDog = new Dog("Buddy", "Canine");

myDog.breathe(); // Inherited from LivingBeing
myDog.makeSound(); // Implemented from Animal interface

console.log(`Species: ${myDog.species}`); // Defined in Animal interface
