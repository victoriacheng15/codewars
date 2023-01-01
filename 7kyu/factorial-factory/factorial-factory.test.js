/* 
In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

Note: 0! is always equal to 1. Negative values should return null;
*/

function factorial(n) {
	if (n < 0) return null;
	if (n === 0) return 1;
	return n === 1 || n === 2 ? n : n * factorial(n - 1);
}

// function factorial(n) {
//   if (n < 0) return null;
//   if (n === 0) return 1;
//   let total = 1;
//   for (let i = 2; i <= n; i += 1) {
//     total *= i;
//   }
//   return total;
// }

describe("factorial", () => {
	const cases = [
		[2, 2],
		[5, 120],
		[-1, null],
	];

	for (const [n, output] of cases) {
		it(`should return ${output} when n = ${n}`, () => {
			const input = factorial(n);
			expect(input).toBe(output);
		});
	}
});
