const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 2;
};
const addThree = (a: number): number => {
  return a + 3;
};

//Insted all Above
const add = (a: number, b: number): number => {
  return a + b;
};

//Regular Classes
class HoldNumber {
  data: number;
}
class HoldString {
  data: string;
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'axsa';

//Generics
class HoldAnything<TypeOfData> {
  data: TypeOfData;
}

const holdNumberGeneric = new HoldAnything<number>();
holdNumberGeneric.data = 123;
const holdStringGeneric = new HoldAnything<string>();
holdStringGeneric.data = 'svcsdf';

//Another Exemple
//first tow are regular classes
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

//Generic class
class ArrayOfGeneric<T> {
  constructor(public collection: T[]) {}
  get(index: number): T {
    return this.collection[index];
  }
}
//Implementetion
new ArrayOfGeneric<string>(['a', 'b', 'c', 'd']);
//OR
new ArrayOfGeneric<number>([1, 2, 3, 4]);
//OR like type infrence
const arr = new ArrayOfGeneric(['a', 'b', 'c', 'd']);

//Exemple of GENERIC with FUNCTIONS
//First two , regulars functions
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

//The GENERIC FUNCTION
function printArr<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArr<string>(['a', 'b', 'c', 'd']);
//OR
printArr(['a', 'b', 'c', 'd']);

//GENERIC CONSTRAINS
class Car {
  print() {
    console.log('Im a car');
  }
}

class House {
  print() {
    console.log('Im a house');
  }
}
interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new House(), new House()]);
//OR
printHousesOrCars<Car>([new Car(), new Car()]);
//OR
printHousesOrCars([new Car(), new House()]);
