/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/

/*
PREP:
- assign num for looping
- divide by all numbers beside 1 and the integer itself
- if reminder === 0, push to the arr
- check arr length
- if 0, the integer is prime
- if not, return the arr
*/

function divisors(integer) {
	let num = integer;
	const arr = [];
	while (num - 1 > 1) {
		num -= 1;
		const divide = integer / num;
		if (divide % 1 === 0) arr.push(divide);
	}
	return arr.length === 0 ? `${integer} is prime` : arr;
}
