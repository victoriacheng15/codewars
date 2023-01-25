import { describe, it, expect } from "vitest";

// if positive number, change it to negative
// if negative number, change it to postive
function invert(array) {
	return array.map((num) => num * -1);
}


describe("invert value", () => {
	it("invert positive number", () => {
		expect(invert([1, 2, 3, 4])).toEqual([-1, -2, -3, -4]);
	});
	
	it("invert negative number", () => {
		expect(invert([-1, -2, -3, -4])).toEqual([1, 2, 3, 4]);
	})
})