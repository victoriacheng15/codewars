/*
Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example: (Input1, Input2 --> Output)
"a", 5 --> "aaaaa"
*/

/*
PREP:
- use Array() to set up n amount of item
- use fill() to fill the string
- join them together at the end
*/

function repeater(string, n) {
	return Array(n).fill(string).join("");
}
