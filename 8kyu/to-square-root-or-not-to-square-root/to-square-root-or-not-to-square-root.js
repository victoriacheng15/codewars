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
