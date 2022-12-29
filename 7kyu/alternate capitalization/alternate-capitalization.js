/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/

/*
PREP:
- use spread operator to convert string to array
- use map function and check index reminder
- if index % 2 === 0, change the even index to uppercase
- if index % 2 !== 0, change odd index to uppercase
- return both answers as array
*/

function capitalize(s) {
	const capFirst = [...s]
		.map((str, index) => (index % 2 === 0 ? str.toUpperCase() : str))
		.join("");
	const capSecond = [...s]
		.map((str, index) => (index % 2 !== 0 ? str.toUpperCase() : str))
		.join("");
	return [capFirst, capSecond];
}
