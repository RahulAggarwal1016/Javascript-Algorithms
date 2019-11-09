/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
To find the circumference and area of a circle
*/

var PI = Math.PI;
var radius = prompt("Enter the Radius of the Circle Here:");
var area;
var circum;

area = PI*(radius**2);
circum = PI*(radius*2);

console.log("The area is:", area);
console.log("The circum is:", circum);