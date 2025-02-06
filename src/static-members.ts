class Counter {
  static count: number = 0; // Static property

  constructor() {
    Counter.count++; // Increment the counter each time an object is created
  }

  static getCount(): number { // Static method
    return Counter.count;
  }
}

const object1 = new Counter();
const object2 = new Counter();
const object3 = new Counter();

console.log(Counter.getCount()); // Prints 3 (three objects have been created)
