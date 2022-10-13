//If we derlare the array with values type script will add as inference
//And we dont need the annotetion
const carMakers = ['ford', 'toyota', 'chevy'];

//If we will decler on empty array we will add annotetion
const cars: string[] = [];

const dates = [new Date(), new Date()];

//2D Array
const carMakersEmpty = [[], [], []];//With no annotetion
const orCarArray: string[][]= [];//With Annotetion
const orCarArrayMultiple: (string[] | boolean[] | number[]) = [];//With Annotetion
//With declared vlues
const carsByMake = [
  ['f150'],
  [false],
  [10]
];


//Flexyble Arrays
//Array of multiple values
const importantDates: (Date | string)[] = [new Date(), 'string'];
//Array of multiple Arrays types
const importantDatesType: (Date[] | string[])[] = [[new Date()], ['string']];
//Or
const teasimportantDatesType: (Date[] & string[])[] = [new Date()]['string'];