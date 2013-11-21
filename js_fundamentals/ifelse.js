// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2){

if (num1 >= num2){
var bigNum = num1;
}else{
var bigNum = num2;
}
console.log("The greater number of " + num1 + " and " + num2 + " is " + bigNum + ".")
}

greaterNum(5, 10);
greaterNum(15, 4);


// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode){
  if (langCode == "es"){
    console.log("Buenos Dias!");
  }else if(langCode == "de"){
    console.log("Guten Tag");
  }else if(langCode == "en"){
    console.log("Hello");
  }else{
    console.log("Sorry, I didn't recognize the language code");
}

helloWorld("en");
helloWorld("es");
helloWorld("de");



// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(numScore){
if (numScore >= .90){
    console.log("A");
  }else if (numScore >= .80){
    console.log("B");
  }else if (numScore >= .70){
    console.log("C");
  }else if (numScore >= .60){
    console.log("D");
  }else{console.log("F")}
}
assignGrade(.95);
assignGrade(.80);
assignGrade(.50);
assignGrade(.79);


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralizeThat(noun, num){
  if (num == 1){
  console.log(num + " " + noun + ".");
  }else {console.log(num + " " + noun + "s.")}
}

pluralizeThat("French horn", 50);
pluralizeThat("Tuba", 1);




