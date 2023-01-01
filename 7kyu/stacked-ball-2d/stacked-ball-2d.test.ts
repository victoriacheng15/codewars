/* 
Background
I have stacked some pool balls in a triangle.

Like this,

pool balls
Kata Task
Given the number of layers of my stack, what is the total height?

Return the height as multiple of the ball diameter.

Example
The image above shows a stack of 5 layers.

Notes
layers >= 0
approximate answers (within 0.001) are good enough
*/

export function stackHeight2d(layers: number) {
	if (!layers) return 0;
	return ((layers - 1) * Math.sqrt(3)) / 2 + 1;
}

describe("stack height 2d", () => {
	const cases = [
		[0, 0],
		[1, 1.0],
		[2, 1.866],
	];

	for (const [layers, output] of cases) {
		it(`should return ${output} when layers = ${layers}`, () => {
			expect(+stackHeight2d(layers).toFixed(3)).toBeCloseTo(+output.toFixed(3));
		});
	}
});
