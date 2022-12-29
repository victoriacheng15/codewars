/* 
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

/* 
PREP:
- set array = []
- get length with x * n
- use for...loop
- if i is dividable by x, push to array
- if not, dont push
- returne array
*/

function countBy(x, n) {
	let array = [];
	for (let i = 1; i <= x * n; i += 1) {
		if (i % x === 0) array.push(i);
	}
	return array;
}
