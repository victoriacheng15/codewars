/* 
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

/* 
To visualize how reduce works in this case
if times = [1, 2, 3] and acc = acc * 60 + time
first, acc = 0 due to the initialValue
acc = 0 * 60 + 1, acc = 1
acc = 1 * 60 + 2, acc = 62
acc = 62 * 60 + 3, acc = 3723
*/

function past(h, m, s) {
	const times = [h, m, s];
	const total = times.reduce((acc, time) => (acc = 60 * acc + time), 0);
	return total * 1000;
}

describe(" convert time to milliseconds", () => {
	const cases = [
		[0, 1, 1, 61000],
		[1, 1, 1, 3661000],
		[0, 0, 0, 0],
		[1, 0, 1, 3601000],
		[1, 0, 0, 3600000],
	];
	for (const [h, m, s, output] of cases) {
		it(`should return ${output} when h = ${h}, m = ${m}, and s = ${s}`, () => {
			expect(past(h, m, s)).toBe(output);
		});
	}
});
