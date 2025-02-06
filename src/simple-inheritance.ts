class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// Derived class
class Cat extends Animal {
  private numberOfMeows: number;

  constructor(name: string) {
    super(name);
    this.numberOfMeows = 0;
  }

  meow(): void {
    console.log('Meow! Meow!');
    this.numberOfMeows += 1;
  }

  showMeows(): void {
    console.log(`${this.name} has meowed ${this.numberOfMeows} times.`);
  }
}

const myCat = new Cat("Ripichi");

myCat.move(5); // "Whiskers moved 5m."
myCat.meow();  // "Meow! Meow!"
myCat.meow();  // "Meow! Meow!"
myCat.showMeows(); // "Whiskers has meowed 2 times."