/* 
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

export function solution(str: string): string {
	return [...str].reduce((output, char) => {
		output = char + output;
		return output;
	}, "");
}

describe("reverse string", () => {
	const cases: string[][] = [
		["world", "dlrow"],
		["hello", "olleh"],
		["word", "drow"],
	];

	for (const [str, output] of cases) {
		it(`should return ${output} when str = ${str}`, () => {
			const input = solution(str);
			expect(input).toBe(output);
		});
	}
});
