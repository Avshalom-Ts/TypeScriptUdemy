"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
//Sorting Array of numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 5, -3, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);
//Sorting string
const stringCollection = new CharactersCollection_1.CharactersCollection('Avshalom');
// const sorterSTR = new Sorter(stringCollection);
// sorterSTR.sort();
stringCollection.sort();
console.log(stringCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sortedListNode = new Sorter(linkedList);
// sortedListNode.sort();
linkedList.sort();
linkedList.print();
