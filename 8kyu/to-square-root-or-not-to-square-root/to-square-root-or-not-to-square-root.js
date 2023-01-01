/* 
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
*/

/* 
PREP:
- check the value is integer or not after square rooted
- if true, return square rooted value
- if false, return power 2 of the value
*/

function squareOrSquareRoot(array) {
	return array.map((value) =>
		Number.isInteger(Math.sqrt(value)) ? Math.sqrt(value) : value ** 2,
	);
}
