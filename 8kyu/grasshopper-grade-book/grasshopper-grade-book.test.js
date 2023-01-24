import { describe, it, expect } from "vitest";

function getGrade(...grades) {
	const avg = [...grades].reduce((a, b) => a + b) / grades.length;
	if (avg >= 90) return "A";
	if (avg >= 80 && avg < 90) return "B";
	if (avg >= 70 && avg < 80) return "C";
	if (avg >= 60 && avg < 70) return "D";
	return "F";
}

describe("getGrade", () => {
	const tests = [
		["A", 95, 90, 93],
		["B", 82, 85, 87],
		["C", 75, 70, 79],
		["D", 65, 70, 59],
		["F", 44, 55, 52],
	];

	for (const [expected, ...grades] of tests) {
		it(`(${grades}) = ${expected}`, () => {
			expect(getGrade(...grades)).toBe(expected);
		});
	}
});
