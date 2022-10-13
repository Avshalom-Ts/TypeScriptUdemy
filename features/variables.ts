//Exemple of typesc Annotetion
let apples: number = 5; //Declering a variable and assigning a value
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//Build in Objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];


//Classes
class Car {

}

let car: Car = new Car(); //The variable car is of type of instence of a Car.

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//Funcion
      //until void is the annotetion///After void is the function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//When we must use annotetion
//1. Function that returns the 'any' type
const json = '{"x":10,"y":20}';
const coordinates = JSON.parse(json);
console.log(coordinates);

//Fixing
// const json = '{"x":10,"y":20}';
// const coordinates: { x: number; y: number } = JSON.parse(json);
// console.log(coordinates);

//2. When diclering a variable and assign value latter
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++){
  if (words[i] === 'green') {
    foundWord = true;
  }
}

//3. Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}