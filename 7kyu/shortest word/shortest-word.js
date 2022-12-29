/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

examples:
findShort("bitcoin take over the world maybe who knows perhaps")
findShort("turns out random test cases are easier than writing out basic ones")
findShort("Let's travel abroad shall we")

*/

function findShort(str) {
	return str
		.split(" ")
		.map((word) => word.length)
		.sort((a, b) => a - b)[0];
}

// updated solution
function findShort(str) {
	const findLength = str.split(" ").map((word) => word.length);
	// return Math.min(...findLength);
	return Math.min.apply(null, findLength);
}

/* 
Math.min cant detect numbers in the array, which is why spread operator there (see why below). If don't use spread operator, have to use ".apply()", this allows you to take more than one arguement.


"The spread operator is a new addition to the set of operators in JavaScript ES6. It takes in an iterable (e.g an array) and expands it into individual elements." From educative

What is the spread operator:
https://www.educative.io/edpresso/what-is-the-spread-operator-in-javascript

MDN - apply() :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

MDN - Spread Operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
