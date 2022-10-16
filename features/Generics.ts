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
