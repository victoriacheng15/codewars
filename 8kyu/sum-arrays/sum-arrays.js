/* 
PREP:
- use reduce() function to get sum
*/

function sum(numbers) {
	return numbers.reduce((prev, cur) => prev + cur, 0);
}
