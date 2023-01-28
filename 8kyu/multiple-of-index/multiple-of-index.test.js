import { describe, expect, it } from "vitest";
/* 
PREP:
- input is array
- use modulus operator to find out if they are multiple of their own index
- filter out and keep the ones that are mutliple of index
- output is array
*/

function multipleOfIndex(array) {
	return array.filter((num, index) => num % index === 0);
}

describe("multipleOfIndex", () => {
	const tests = [
		[
			[22, -6, 32, 82, 9, 25],
			[-6, 32, 25],
		],
		[
			[68, -1, 1, -7, 10, 10],
			[-1, 10],
		],
		[
			[
				-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27,
				-92, 68,
			],
			[-85, 72, 0, 68],
		],
	];

	for (const [array, expected] of tests) {
		it(`should return ${expected}`, () => {
			expect(multipleOfIndex(array)).toEqual(expected);
		});
	}
});
