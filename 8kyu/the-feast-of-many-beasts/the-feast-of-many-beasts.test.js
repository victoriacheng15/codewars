import { describe, it, expect } from "vitest";

// function feast(beast, dish) {
//   return beast[0] === dish[0] && beast.at(-1) === dish.at(-1);
// }

/* 
can use slice(-1) instead

e.g. beast.slice(-1)

beast.slice(-1) === dish.slice(-1)
*/

function feast(beast, dish) {
	return (
		beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
	);
}

describe("feast", () => {
	it("should return true if first and last letters are the same", () => {
		expect(feast("great blue heron", "garlic naan")).toBeTruthy();
	});

	it("should return false if first and last letters are NOT the same", () => {
		expect(feast("brown bear", "bear claw")).toBeFalsy();
	});
});
