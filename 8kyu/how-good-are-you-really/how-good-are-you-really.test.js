/* 
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

function betterThanAverage(classPoints, yourPoints) {
	const average =
		classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;
	return average < yourPoints;
}

describe("better than average", () => {
	const cases = [
		[[2, 3], 5, true],
		[[100, 40, 34, 57, 29, 72, 57, 88], 75, true],
		[[41, 75, 72, 56, 80, 82, 81, 33], 50, false],
		[[29, 55, 74, 60, 11, 90, 67, 28], 21, false],
	];

	for (const [classPoints, yourPoints, output] of cases) {
		it(`should return ${output} when class points = [${classPoints}] and your point = ${yourPoints}`, () => {
			expect(betterThanAverage(classPoints, yourPoints)).toBe(output);
		});
	}
});
