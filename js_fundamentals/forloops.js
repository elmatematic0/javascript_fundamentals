// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


for (var num = 0; num <=20; num++){
  if (num % 2 == 0){
    console.log(num + " is even.");
  }else{console.log(num + " is odd.")}
}

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
for (var num = 0; num <=10; num++){
  for(multiplier = 1; multiplier <= 10; multiplier++){
  var mult = num * multiplier;
  console.log(num + " times " + multiplier + " = " + mult + ".");
}}

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

for (var grade = 60; grade <=100; grade++){
  if (grade < 70){
    console.log("For " + grade + " you got a D.");
  }else if (grade < 80){
    console.log("For " + grade + " you got a C.");
  }else if (grade < 90){
    console.log("For " + grade + " you got a B.");
  }else{ console.log("For " + grade + " you got an A.");}
}

