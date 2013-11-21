// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numChildren = 3;
var wifeName = "Amy";
var location = "Toronto";
var job = "programmer";
console.log("You will be a " + job + " in " + location + " and married to " + wifeName + " with " + numChildren);
 
// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2013;
var birthYear = 1982;
var age1 = (currentYear - birthYear);
var age2 = (age1 -1)
console.log("Your age is either " + age2 + " or " + age1 + " depending on which month you were born.")

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 30;
var maxAge = 100;
var snacksPerDay = 3;
var totalSnacks = (maxAge - currentAge) * 365 * snacksPerDay;
console.log("You will need " + totalSnacks + " to last you until the ripe old age of " + (maxAge - currentAge) + ".");


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
var rad = 10;
var circ = (rad*Math.PI)*rad;
var area = Math.PI*(rad*rad);
console.log("The circumference is " + circ + ".");
console.log("The area is " + area + ".");



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
var cel = 20;
var cToF = (1.8*cel)+32;
var fah = 70;
var fToC = (fah-32)/1.8;
console.log("Converting " + cel + " celsius results in " + cToF + " fahrenheit.");
console.log("Converting " + fah + " fahrenheit results in " + fToC + " celsius");




