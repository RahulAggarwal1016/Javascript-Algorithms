/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
“FizzBuzz.” From 1 to 50, if the number is a multiple of three: print 
“Fizz”, if the number is a multiple of five: print “Buzz”,if they are multiples of both: print “FizzBuzz”

*/

for (var num =1; num <= 50; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0)
    console.log("Buzz");
  }