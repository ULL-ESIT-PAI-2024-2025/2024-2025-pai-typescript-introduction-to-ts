class Person {
  private name: string;
  private age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public greet(): void {
    console.log(`Hello, I am ${this.name}`);
  }

  protected getAge(): number {
    return this.age;
  }
}
