// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(children, spouse, location, job) {
   console.log("You will be a " + job + " in " + location + " , and married to " + spouse + " with " + " kids.");
 }
 tellFortune(3, "Amy", "Toronto", "Bitmaker");


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// EXERCISE: The Lifetime Supply Calculator

function calculateAge(birthYear){
  var age = (new Date().getFullYear() - birthYear);
  console.log("You are either " + (age-1) + " or " + age + ".");
}
calculateAge(1900);


// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, aPerDay){
  var maxAge = 100;
  var totalSnacks = (maxAge - age) * 365 * Math.round(aPerDay);
  console.log("You will need " + totalSnacks + " fruitsnacks to last you until the ripe old age of " + maxAge + ".");
}
  calculateSupply(50, 2.333333333);
  calculateSupply(20, 40);
  calculateSupply(30, 3);


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(rad){
var circ = (rad*Math.PI)*rad;
console.log("The circumference is " + circ + ".");
};

calcCircumference(5);


function calcArea(rad){
var area = Math.PI*(rad*rad);
console.log("The area is " + area + ".");
};

calcArea(5);





// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
function cToF(cel) {
var fah = (1.8*cel)+32;
console.log("Converting " + cel + " celsius results in " + Math.round(fah) + " fahrenheit.");

}
cToF(10);

function fToC(fah) {
  var cel = (fah-32)/1.8;
  console.log("Converting " + fah + " fahrenheit results in " + Math.round(cel) + " celsius");
}
fToC(70);

