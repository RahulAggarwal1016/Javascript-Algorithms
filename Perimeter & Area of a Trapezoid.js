/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
To calculate the perimeter and area of a trapezoid with inputted values
*/

//Input

var side_a = prompt("Enter the Value of A:");
var side_b = prompt("Enter the Value of B:");
var side_height = prompt("Enter the Height:");
var side_c = prompt("Enter the Value of C:");
var side_d = prompt("Enter the Value of D");
var area;
var perimeter;

//Processing

area = [(+side_a)+(+side_b)]*(+side_height)/2; 
perimeter = (+side_a)+(+side_b)+(+side_c)+(+side_d);

//Output

console.log("The Area is of the Trapezoid is", area);
console.log("The Perimeter of the Trapezoid is", perimeter);