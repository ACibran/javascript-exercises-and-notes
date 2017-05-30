// *jshint esversion: 6 */
//Let's talk about functions

//So what are functions?
// It is a way of bundling a piece
// of repetitive code into a reusable

//Named Function Declarations - available anywhere in this file
function lanuchTheMissiles() {
  console.log('Launching the missiles');
}

//Our first function
function square(num){
  //lanuchTheMissiles(); // this is bad!
  return num * num;
}

const squareOfTwo = square(2);
// console.log(num); //doesn't exist outside the function
                  // variables are encased in functions
console.log('squareOfTwo', squareOfTwo);




//console.log('Cube of 2 after: ', cube(2)); //BROKE b/c variable not defined
//assign function to variables
                    //name both sides
const cube = function cube(num){
  return num * num * num;
};
//const cubeFatArrow = (num) => {
//  return num * num * num;
// };
//Alternatively
const cubeFatArrow = (num) => num * num * num;

console.log('Cube of 2 after: ', cube(2));
console.log('cubeFatArrow of 2: ', cubeFatArrow(2));
