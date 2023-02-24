import { describe, expect, it } from "vitest";

function solve(s) {
	const lowerCase = /[a-z]/g;
	const upperCase = /[A-Z]/g;
	const numbers = /\d/g;
	const special = /\W/g;
	return [upperCase, lowerCase, numbers, special].map(
		(regex) => s.split(regex).length - 1,
	);
}

describe("simple string characters", () => {
	it("should return array contains, uppercase, lowercase, numbers and special characters", () => {
		expect(solve("*'&ABCDabcde12345")).toEqual([4, 5, 5, 3]);
	});

	it("should return array contains, uppercase, lowercase, numbers and special characters", () => {
		expect(solve("bgA5<1d-tOwUZTS8yQ")).toEqual([7, 6, 3, 2]);
	});
});
