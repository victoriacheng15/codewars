import { describe, expect, it } from "vitest";

/*
PREP:
- find lower case count
- find upper case count
- if lower case count is greater or equal to upper case count
- true, return lower case
- false, return upper case
*/

function solve(s) {
	function counter(forLower) {
		return forLower
			? (char) => char === char.toLowerCase()
			: (char) => char === char.toUpperCase();
	}
	const lowerCount = [...s].filter(counter(true)).length;
	const upperCount = [...s].filter(counter()).length;
	return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase();
}


describe("fix-string-case", () => {
	const tests = [
		["coDe", "code"],
		["CODe", "CODE"],
		["coDE", "code"],
	]

	for(const [s, expected] of tests) {
		it(`${s} -> ${expected}`, () => {
			expect(solve(s)).toBe(expected);
		});
	}
})