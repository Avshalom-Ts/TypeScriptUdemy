import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

//Sorting Array of numbers
const numbersCollection = new NumbersCollection([10, 5, -3, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
numbersCollection.sort();
console.log(numbersCollection.data);

//Sorting string
const stringCollection = new CharactersCollection('Avshalom');
// const sorterSTR = new Sorter(stringCollection);
// sorterSTR.sort();
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sortedListNode = new Sorter(linkedList);
// sortedListNode.sort();
linkedList.sort();
linkedList.print();
