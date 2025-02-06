// Abstract class representing a sorting algorithm
abstract class Algorithm {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Abstract method that must be implemented by subclasses
  abstract sort(data: number[]): number[];

  // Concrete method shared by all subclasses
  describe(): void {
    console.log(`This is the ${this.name} sorting algorithm.`);
  }
}

// BubbleSort class extending Algorithm
class BubbleSort extends Algorithm {
  constructor() {
    super("BubbleSort");
  }

  // Implementing the abstract method
  sort(data: number[]): number[] {
    let arr = [...data];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}

// QuickSort class extending Algorithm
class QuickSort extends Algorithm {
  constructor() {
    super("QuickSort");
  }

  // Implementing the abstract method
  sort(data: number[]): number[] {
    if (data.length <= 1) return data;
    let pivot = data[0];
    let left = data.slice(1).filter(n => n < pivot);
    let right = data.slice(1).filter(n => n >= pivot);
    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

// Example usage
const bubble = new BubbleSort();
const quick = new QuickSort();

bubble.describe();
console.log("Sorted:", bubble.sort([5, 3, 8, 1, 2]));

quick.describe();
console.log("Sorted:", quick.sort([5, 3, 8, 1, 2]));