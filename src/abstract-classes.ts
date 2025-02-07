// Abstract class representing a sorting algorithm
abstract class Algorithm {
  protected nameAlgorithm: string;

  constructor(nameAlgorithm: string) {
    this.nameAlgorithm = nameAlgorithm;
  }

  // Abstract method that must be implemented by subclasses
  abstract sort(data: number[]): number[];

  // Concrete method shared by all subclasses
  describe(): void {
    console.log(`This is the ${this.nameAlgorithm} sorting algorithm.`);
  }
}

// BubbleSort class extending Algorithm
class BubbleSort extends Algorithm {
  constructor() {
    super('BubbleSort');
  }

  // Implementing the abstract method
  sort(data: number[]): number[] {
    let array = [...data];
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
}

// QuickSort class extending Algorithm
class QuickSort extends Algorithm {
  constructor() {
    super('QuickSort');
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

function main() {
  // Example usage
  const bubble = new BubbleSort();
  const quick = new QuickSort();

  bubble.describe();
  console.log('Sorted:', bubble.sort([5, 3, 8, 1, 2]));

  quick.describe();
  console.log('Sorted:', quick.sort([5, 3, 8, 1, 2]));
}

main();