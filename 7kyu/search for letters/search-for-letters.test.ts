/* 
Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

For instance:

"a   **&  cZ"  =>  "10100000000000000000000001"
*/

export function change(string: string): string {
	const result = Array(26).fill(0);
	const regex = /[^\w]/g;

	for (const item of string.toLowerCase().replace(regex, "")) {
		result[item.charCodeAt(0) - 97] = 1;
	}

	return result.join("");
}

describe("change", () => {
	const cases: string[][] = [
		["a **&  bZ", "11000000000000000000000001"],
		["a   **&  cZ", "10100000000000000000000001"],
		["abcdefghijklmnopqrstuvwxyz{|}~", "11111111111111111111111111"],
	];

	for (const [string, output] of cases) {
		it(`should return ${output} when string = ${string}`, () => {
			expect(change(string)).toBe(output);
		});
	}
});
