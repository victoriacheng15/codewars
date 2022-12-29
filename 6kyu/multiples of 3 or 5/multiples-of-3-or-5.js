/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/

function solution(number) {
	let sum = 0;
	for (let i = 1; i < number; i += 1) {
		if (i % 3 === 0 || i % 5 === 0) sum += i;
	}
	return sum;
}

function solution1(number) {
	const arr = [...Array(number).keys()].slice(1);
	const get3or5 = (num) => num % 3 === 0 || num % 5 === 0;
	const sum = (acc, curr) => acc + curr;
	return arr.filter(get3or5).reduce(sum, 0);
}

function solution2(number) {
	const arr = [...Array(number).keys()].slice(1);
	return arr.reduce((acc, curr) => {
		if (!(curr % 3 && curr % 5)) acc += curr;
		return acc;
	}, 0);
}
