/* 
PREP:
- use reduce() function
- power of 2 each number in the array
- return the total
*/

function squareSum(numbers) {
	return numbers.reduce((total, next) => total + next ** 2, 0);
}
