/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// split string
// map the array
// check number is greater or less than 5
// join them
function fakeBin(x) {
	return x
		.split("")
		.map((num) => (num < 5 ? "0" : "1"))
		.join("");
}
