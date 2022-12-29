/* 
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

/* 
PREP:
- use reduce()
- check 2 items in the array
- if a item length is larger or eqal to b item length,
- return a
- if false, return b
- repeat the same process until the end of array
*/

function findLongest(array) {
	return array.reduce((a, b) => (`${a}`.length >= `${b}`.length ? a : b));
}
