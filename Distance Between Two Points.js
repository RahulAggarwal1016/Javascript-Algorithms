/* 
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
To find the distance between two points on the cartesian plane

*/

//Input

var x1=Number(prompt("Enter the value of X1:"));
var y1 = Number(prompt("Enter the value of Y1"));
var x2 = Number(prompt("Enter the Value of X2"));
var y2 = Number(prompt("Enter the value of Y2"));
var distance = 

//Processing

distance = Math.sqrt((x2-x1)**2+(y2-y1)**2);

//Output

console.log("The Distance Between the Two Points is", distance);