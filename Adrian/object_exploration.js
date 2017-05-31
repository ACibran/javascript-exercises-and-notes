/*jshint esversion: 6*/
//Let's create a car
//Properties
// color, make, model  hasAC
const Car = {
  color: 'green', // semicolons wreck yo life! (inside of Objects)
  make: 'Dodge',
  model: 'Dart',
  'hasAC': false, //technically all of the left side is a string
  paint: function(newColor){ //functions on objects are called methods // Car.color = newColor;
    this.color = newColor; //inside the object this refers to the object
  }

  fixAC: function(){
  this.hasAC = true;
}

console.log('Car: ', Car);
//I want to fix the AC
Car.hasAC = true; //this is shorthand
console.log('Car: ', Car);
//Alternatively
Car['hasAC'] = false;
console.log('Car: ', Car);

//I want to check the color;
console.log('Color of car: ', Car.color);

//Paint the car
Car.paint('orange');
console.log('Car: ', Car);

//Fix the AC
Car.fixAC();
console.log('Car after AC fix: ', Car);



fixAC: function(){
this.hasAC = true;


///Shirt Objects
//You need at least 3 properties
//You need at least 3 methods from your plan
//One of your methods should modify a property such as 'paint above'
//You need to demonstrate the usage of each method
const Shirt = {
  shade: 'yellow',
  style: 'turtle neck',
  material: 'suede',
  'hasPockets': false,
  Color: function(newShade){
     this.shade = newShade;
}
