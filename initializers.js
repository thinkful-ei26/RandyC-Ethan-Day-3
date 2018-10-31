'use strict';

// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
// Use console.log to print the flour and water properties.
// Add an empty method to the loaf object called hydration.
// Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
// Call the hydration method and use console.log to print the result.

function Recipe(flourAmt, waterAmt){
  this.flour = flourAmt;
  this.water = waterAmt;
  // this.hydration = function(){
  //   return (this.water/this.flour) * 100;
  // };
}

Recipe.prototype.hydration = function (){
  return (this.water/this.flour) * 100;
};

const loaf = new Recipe(300, 210);

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());


