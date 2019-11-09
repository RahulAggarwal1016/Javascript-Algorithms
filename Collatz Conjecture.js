/*
Creator: Rahul Aggarwal
Email Address: rahulaggarwal1016@gmail.com

Purpose of Code:
Let N represent a positive integer from user input. For any N:
If N is even, divide by 2: N/2
If N is odd, multiply by 3 then add 1: 3N + 1

The collatz conjecture states that any N that is a positive integer will end up at 1.
*/

var user_input = Number(prompt("Enter a positive integer"));

console.log(user_input);

while (user_input != 1) {
    if (user_input % 2 === 0) {
        user_input = user_input / 2;
        console.log(user_input);
    }
    else if (user_input % 2 !== 0) {
        (user_input = user_input * 3 + 1);
        console.log(user_input);
    }
}