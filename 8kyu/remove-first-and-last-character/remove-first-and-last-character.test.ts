/* 
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

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
