/* 
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

export const boolToWord = (bool: boolean): string => {
	return bool ? "Yes" : "No";
};

describe("boolean to word", () => {
	const cases: [boolean, string][] = [
		[true, "Yes"],
		[false, "No"],
	];

	for (const [boolean, output] of cases) {
		it(`should return ${output} when boolean = ${boolean}`, () => {
			expect(boolToWord(boolean)).toMatch(output);
		});
	}
});
