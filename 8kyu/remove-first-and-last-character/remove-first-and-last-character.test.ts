import {describe, expect, it} from "vitest";

export function removeChar(str: string): string {
	return str.slice(1, str.length - 1);
}

describe("remove char", () => {
	const cases: string[][] = [
		["eloquent", "loquen"],
		["country", "ountr"],
		["place", "lac"],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str}`, () => {
			expect(removeChar(str)).toBe(output);
		});
	}
});
