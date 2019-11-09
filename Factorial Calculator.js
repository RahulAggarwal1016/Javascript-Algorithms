/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Factorial Calculator

*/

var num = Number(prompt("Enter a value to calculate the factorial."));

var product =1;

//Solution 1 - For Loop
for (var factor =1; factor <= num; factor++) {
  product = product*factor;
}

console.log("The factorial of", num, "is", product);

//Solution 2 - Going Downwards
//Using While Loop

var product = 1;
var originalNum =num;
while (num > 0) {
  product = product*num;
  num--;
}

console.log("The factorial of", originalNum, "is", product);