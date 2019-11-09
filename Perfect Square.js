/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
To Figure out if a number is a perfect square 
*/

//Input 
var user_input = prompt("Input your number over here")
var is_square = (null);

//Processing
is_square = (Number(Math.sqrt(user_input) % 1)) ===0;