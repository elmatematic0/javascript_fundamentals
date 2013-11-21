// Exercises: Arrays

// EXERCISE: Your top choices

// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


var topChoices = ["camels", "llamas", "donkeys"];
var indexVal = 0
while(indexVal<=topChoices.length-1){
console.log("My #" + (indexVal+1) + " choice, " + topChoices[indexVal] + ".");
indexVal++;
}



