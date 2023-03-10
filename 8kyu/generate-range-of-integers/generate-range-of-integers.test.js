import { describe, it, expect } from "vitest";

function generateRange(min, max, step) {
	const arr = [];
	for (let i = min; i <= max; i += step) {
		arr.push(i);
	}
	return arr;
}

// function generateRange(min, max, step) {
//   const length = (max - min + step) / step;
//   const arr = [...new Array(length).keys()].map((n) => n * step + min);
//   return arr;
// }

describe("generate range in array", () => {
	it("should return [2,4,6,8,10] with min of 2, max of 10 and step of 2", () => {
		expect(generateRange(2, 10, 2)).toEqual([2, 4, 6, 8, 10]);
	});

	it("should return [1,4,7,10] with min of 1, max of 10 and step of 3", () => {
		expect(generateRange(1, 10, 3)).toEqual([1, 4, 7, 10]);
	});
});
