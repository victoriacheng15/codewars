function past(h, m, s) {
	const times = [h, m, s];
	const total = times.reduce((acc, time) => (acc = 60 * acc + time), 0);
	return total * 1000;
}

// describe(" convert time to milliseconds", () => {
// 	const cases = [
// 		[0, 1, 1, 61000],
// 		[1, 1, 1, 3661000],
// 		[0, 0, 0, 0],
// 		[1, 0, 1, 3601000],
// 		[1, 0, 0, 3600000],
// 	];
// 	for (const [h, m, s, output] of cases) {
// 		it(`should return ${output} when h = ${h}, m = ${m}, and s = ${s}`, () => {
// 			expect(past(h, m, s)).toBe(output);
// 		});
// 	}
// });
