import { describe, expect, it } from "vitest";
// function between(a, b) {
//   const result = [];
//   let index = a;
//   while (index <= b) {
//     result.push(index);
//     index += 1;
//   }
//   return result;
// }

function between(a, b) {
	return [...Array(b - a + 1)].map((_, index) => index + a);
}

describe("what is between", () => {
	it("should return [1,2,3,4] for (1,4)", () => {
		expect(between(1, 4)).toEqual([1, 2, 3, 4]);
	});

	it("should return [-2,-1,0,1,2] for (-2,2)", () => {
		expect(between(-2, 2)).toEqual([-2, -1, 0, 1, 2]);
	});
});
