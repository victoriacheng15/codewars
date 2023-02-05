/* 
PREP:
- map() through the array with Number to convert them to number
- use reduce() to add them all
*/

function sumMix(x) {
	return x.map(Number).reduce((a, b) => a + b, 0);
}
