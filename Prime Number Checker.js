/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Prime Number Checker
What is a prime number: A number with only two factors: 1 and itself.

*/

var num = Number(prompt("Enter a value to check"));

// Processing - Solution 1: Counting the number of factors
var isPrime = false; // Initializing if we have a prime
var factorCounter = 0;

for (var divisor = 1; divisor <= num; divisor++) {
  if (num % divisor === 0) {
    factorCounter++
  }
}

if (factorCounter == 2) {
  isPrime = true;
  console.log(num, "is prime.");
} else {
  console.log(num, "is not prime.");
}

// Solution 2 - Exiting if we find a factor
// var num from before

var isPrime = true; // Set to  true
var divisor = 2;

while (isPrime && divisor < num) {
  if (num % divisor === 0) {
    isPrime = false;
  }
  divisor++;
}

if (isPrime) {
  console.log(num,"is prime.");
} else {
  console.log(num,"is not prime.");
}

// Solution 3 - Understanding Factors

var isPrime = true; // Set to  true
var divisor = 2;

// Idea: We only need to check until the square root of
// our number.

while (isPrime && divisor < Math.floor(Math.sqrt(num))) {
  if (num % divisor === 0) {
    isPrime = false;
  }
  divisor++;
}

if (isPrime) {
  console.log(num,"is prime.");
} else {
  console.log(num,"is not prime.");
}