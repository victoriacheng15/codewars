/* 
Description:

We want to generate a function that computes the series starting from 0 and ending until the given number.

Example:
Input:

> 6
Output:

0+1+2+3+4+5+6 = 21

Input:

> -15
Output:

-15<0

Input:

> 0
Output:

0=0
*/

const SequenceSum = (function () {
	function SequenceSum() {}

	SequenceSum.showSequence = function (count) {
		if (count < 0) return `${count}<0`;
		if (count === 0) return `${count}=0`;

		const arr = [...new Array(count + 1).keys()];
		const total = arr.reduce((acc, value) => acc + value, 0);

		return `${arr.join("+")} = ${total}`;
	};

	return SequenceSum;
})();

describe("sum of numbers from 0 to n", () => {
	const cases = [
		[6, "0+1+2+3+4+5+6 = 21"],
		[-15, "-15<0"],
		[0, "0=0"],
	];

	for (const [count, output] of cases) {
		it(`should return ${output} when count is ${count}`, () => {
			const input = SequenceSum.showSequence(count);
			expect(input).toBe(output);
		});
	}
});
