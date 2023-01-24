export function gooseFilter(birds: string[]): string[] {
	const geese: string[] = [
		"African",
		"Roman Tufted",
		"Toulouse",
		"Pilgrim",
		"Steinbacher",
	];
	return birds.filter((bird) => !geese.includes(bird));
}

import { describe, it, expect } from "vitest";

describe("goose filter", () => {
	const tests = [
		[
			[
				"Mallard",
				"Hook Bill",
				"African",
				"Crested",
				"Pilgrim",
				"Toulouse",
				"Blue Swedish",
			],
			["Mallard", "Hook Bill", "Crested", "Blue Swedish"],
		],
		[
			["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"],
			["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"],
		],
		[["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"], []],
	];

	for (const [input, output] of tests) {
		it(`should return [${output}] when input = [${input}]`, () => {
			expect(gooseFilter(input)).toEqual(output);
		});
	}
});
