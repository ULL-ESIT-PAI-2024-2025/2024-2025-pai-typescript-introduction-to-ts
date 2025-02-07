class Pair<T, U> {
  private first: T;
  private second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
  // Method to display the pair
  display(): void {
    console.log(`First: ${this.first}, Second: ${this.second}`);
  }
}
// Creating instances with different types
let numberPair = new Pair<number, number>(5, 10);
let stringNumberPair = new Pair<string, number>("Age", 30);
// Using the display method
numberPair.display();         // Output: First: 5, Second: 10
stringNumberPair.display();   // Output: First: Age, Second: 30