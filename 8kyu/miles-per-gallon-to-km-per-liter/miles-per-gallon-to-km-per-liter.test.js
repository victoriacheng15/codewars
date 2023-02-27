import { describe, expect, it } from "vitest";

function converter(mpg) {
	const LITRES_PER_GALLON = 4.54609188;
	const KILOMETERS_PER_MILE = 1.609344;
	const ratio = KILOMETERS_PER_MILE / LITRES_PER_GALLON;
	return Math.round(100 * mpg * ratio) / 100;
}

describe("convert miles to km", () => {
	const tests = [
		[12, 4.25],
		[24, 8.5],
		[36, 12.74],
	];

	for (const [mpg, output] of tests) {
		it(`converts ${mpg} miles to ${output} km`, () => {
			expect(converter(mpg)).toBe(output);
		});
	}
});
