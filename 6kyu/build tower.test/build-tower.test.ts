/* 
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

export const towerBuilder = (nFloors: number): string[] => {
	const numbers = [...Array(nFloors).keys()];
	const tower = numbers.map((floor) => {
		const space = " ".repeat(nFloors - floor - 1);
		const star = "*".repeat(2 * floor + 1);
		return `${space}${star}${space}`;
	});

	return tower;
};

describe("tower builder", () => {
	const cases: [number, string[]][] = [
		[1, ["*"]],
		[2, [" * ", "***"]],
		[3, ["  *  ", " *** ", "*****"]],
	];

	for (const [nfloors, output] of cases) {
		it(`should return ${output} when nfloors = ${nfloors}`, () => {
			expect(towerBuilder(nfloors)).toEqual(output);
		});
	}
});
