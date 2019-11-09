/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Finds the number with the most factors from 1 to N

*/

var upperLimit = Number(prompt("Enter an upper limit"));
// var num = Number(prompt("Enter a number"));
var mostFactorsCount = 0; // This is to track the most number of factors
var theNumWithMostFactors = 0; // This is to track the number that
// has most number of factors


for (var num = 1; num <= upperLimit; num++) {
  var factorCount = 0; // Initializing and Resetting this Variable
  // at every iteration
  for (var div = 1; div <= num; div++) {
    if (num % div === 0) {
      //console.log(div)
      factorCount++;
    } // End of if
  } // End of for
  if (factorCount > mostFactorsCount) {
    mostFactorsCount = factorCount;
    theNumWithMostFactors = num;
  }
} // End of for

console.log("The number with most factors is", theNumWithMostFactors);
console.log("It has", mostFactorsCount, "factors");

//console.log("The number of factors are:",factorCount);