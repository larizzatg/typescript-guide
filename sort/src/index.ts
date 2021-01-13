import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkList';

const numbers = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers);

const characters = new CharactersCollection('Larizza');
characters.sort();
console.log(characters);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort()
linkedList.print();