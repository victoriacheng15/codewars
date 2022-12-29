/* 
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/

/* 
PREP: 
- convert to string and then get length

or
- set length = 0
- assign n to num
- if num = 0, return length + 1
- use while loop, condition: num > 0
- num % 10 => this is to find the last num
  - 12345 -> 5
- num - reminder => 12345 - 5 = 12340
- then divide by 10 to get rid the last zero
- add 1 to length
- repeat until num reaches 0
*/

function digits(n) {
	return [...`${n}`].length;
}

function digits1(n) {
	let length = 0;
	let num = n;
	if (num === 0) length += 1;
	while (num > 0) {
		num = (num - (num % 10)) / 10;
		length += 1;
		// console.log({ num, length });
	}
	return length;
}
