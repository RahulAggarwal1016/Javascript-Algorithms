/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:

Triangle Checker

Triangle ABC is a triangle iff:
a + b > c
b + c > a
a + c > b

Equilateral: A == B == C
Isosceles: Two sides are equal
Scalene: No sides are equal

*/

//Input and Variable Initilization
var side_a = Number(prompt("Enter the length of a"));
var side_b = Number(prompt("Enter the length of b"));
var side_c = Number(prompt("Enter the length of c"));

// Check to see if the triangles can create a triangle
var case1 = (side_a + side_b) > side_c;
var case2 = (side_b + side_c) > side_a;
var case3 = (side_a + side_c) > side_b;

// Processing 
/* 
  Note: if execute its block of its boolean expression is true
  
  Boolean variables are always either true or false; THEREFORE,
  we don't need to compare them to boolean values of true or false.
*/

if (case1 && case2 && case3){
  if (side_a == side_b && side_b == side_c) {
    console.log("It is an equilateral triangle");
  } else if (side_a == side_b || side_b == side_c || side_a == side_c) {
    console.log("It is an isoceles triangle");
  } else {
    console.log("It is a scalene triangle");
  }
} else { 
  console.log("It is not a triangle!");
}