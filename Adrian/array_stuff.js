//All about arrays! [Okay that may be an overpromise]

//How do I create an array?
//Empty?
const empty = [];
//Numbers
const numbers = [1,2,3];
//Strings
const strings = ['a', 'b', 'c',];
//Array of Objects?
const objects = [{}, {}, {}]
//Array of Arrays?
const arrays = [[], [], []];
//The above are examples of creating arrays using
// the array literal syntax

//How many elements(things) are in the array?
const emptyLength = empty.length;
console.log('Empty Length: ', emptyLength);
const numbersLength = numbers.length;
console.log('Numbers Length: ', numbersLength);

//How can I access an element of an array?
const firstString = strings[0];
console.log('First String from Strings Array: ', firstString);
const thirdObject = objects[2];
console.log('The third object from objects: ', thirdObject);
console.log('Use an index that is greater than the length: ', objects[3]);

//How can I change an element of an array?
// *If it has numbers now, it should always have numbers.
numbers[2] = 4;
console.log('Numbers after changing 3 to 4: ', numbers);

//How can I add elements to an array, specifically to the right hand side?
console.log('strings before the push: ', strings);
strings.push('f');
console.log('strings after the push: ', strings);

//How can I combine two arrarys?
const combined = numbers.concat(strings); //
console.log('combined array of numbers and strings: ', combined);

// How can I find the position of an element in the array?
//Warning: numbers and string work like you think they should.
// Objects and Arrays can do weird things.
const positionOfB = strings.indexOf('b');
console.log('Position of B: ', positionOfB);
const positionOfK = strings.indexOf('k');
console.log('Position of k; ', positionOfK);
//Warning: If the element appears more than once, you will only get the
//First index not all.

//What if I want a piece of an array?
const lastTwoNumbers = numbers.slice(numbers.length - 2);
console.log('The last two numbers of numbers: ', lastTwoNumbers);

//forEach - I want to iterate of through an array.
const resultOfForEach = numbers.forEach(function logger(number, index){
console.log('Numbers: ', number, index);
});
console.log('resultOfForEach', resultOfForEach);


//FOREACH CHALLENGE
const x = [4, 5, 6, 7, 8, 9];
//Write a foreach statement that prints out each of the elements
//and its position for the array x
x.forEach(function logger(element, index){
console.log('x: ', element, index);
});

//MAP CHALLENGE
//What can replcae the _ with to get an array of lengths of the strings
// contained in the y array?
const y = ['I', 'like', 'cheese', '?'];
const yLengths = y.map(function getTheLengther(string, index){
  return string.length;
});
console.log ('yLengths: ', yLengths);

//map - I want to get a new array with changes to
        //each element of the original
const stringLengths = strings.map(function lengthGetter (string, index){});
console.log('stringLengths: ', stringLengths);

//filter - I want only certain elements of an array that pass a test.
const lengthOfOneStrings = y.filter(function test(string, index){
  return string.length === 1;
});
console.log('lengthOfOneStrings: ', lengthOfOneStrings);

//filter CHALLENGE
//use a filter statement and the y array
const stringsWithLengthsBiggerThanOne = y.filter(function isBigger(string, index){
  return string.length > 1;
});
console.log('big ole strings', stringsWithLengthsBiggerThanOne);
console.log('lengthOfOneStrings: ', lengthOfOneStrings);

//reduce - I want to take an array to something simpler.
const sumOfNumbers = numbers.reduce(function adder(acc, next){
console.log('acc: ', acc, 'next: ', next);
  return acc + next;
}, 0);
console.log('sumOfNumbers: ', sumOfNumbers);
