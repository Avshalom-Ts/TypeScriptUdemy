interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
export abstract class Sorter {
  // collection: number[]; //insted public

  // constructor(public collection: Sortable) {
  // this.collection = collection;// insted public
  // }
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  //Boble sort
  sort(): void {
    //Come from the get metod in the class NumbersCollection
    // const length = this;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
