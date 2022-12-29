/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
*/

/*
PREP:
- add a and b
- use toString() with 2 as the parameter

note:
check this link for the radix paraptmer
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

what is radix??
https://en.wikipedia.org/wiki/Radix
*/

function addBinary(a, b) {
	const getBinary = a + b;
	return getBinary.toString(2);
}

console.log(addBinary(1, 1));
