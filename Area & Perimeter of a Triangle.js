/* 
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
To Determine the Area and Perimeter of a Triangle
*/

//Input

var base = prompt("Enter the Base Here:");
var height = prompt("Enter the Height:");
var side_a = prompt("Enter A Here:");
var side_c = prompt("Enter C Here");
var area;
var peri;

//Processing

area = (base*height)/2;
peri = (+side_a)+(+base)+(+side_c);

//Output

console.log("The Area of Your Triangle is:", area);
console.log("The Perimeter of Your Triangle is:", peri);