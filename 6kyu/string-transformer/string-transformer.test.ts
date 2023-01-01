/* 
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.
*/

export function stringTransformer(str: string): string {
	const arr = str.split(" ");
	const isUpper = (char: string) => char === char.toUpperCase();
	const swapCase = (char: string) =>
		isUpper(char) ? char.toLowerCase() : char.toUpperCase();

	return arr
		.map((word) => [...word].map(swapCase).join(""))
		.reverse()
		.join(" ");
}

describe("string transformer", () => {
	const cases: string[][] = [
		["Example Input", "iNPUT eXAMPLE"],
		[
			"To be OR not to be That is the Question",
			"qUESTION THE IS tHAT BE TO NOT or BE tO",
		],
		[" A b C d E f G ", " g F e D c B a "],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str}`, () => {
			expect(stringTransformer(str)).toBe(output);
		});
	}
});
