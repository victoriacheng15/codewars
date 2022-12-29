/* 
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

/* 
PREP:
- get an array with numbers
- filter multiples of 3 and 5
- add them
*/

function findSum(n) {
	const arr = [...Array(n + 1).keys()].splice(1);
	const threeAndFive = (num) => num % 3 === 0 || num % 5 === 0;
	const total = (acc, currVal) => acc + currVal;
	return arr.filter(threeAndFive).reduce(total);
}
